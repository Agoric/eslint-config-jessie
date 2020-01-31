const fs = require('fs');
const { FileEnumerator } = require('eslint/lib/cli-engine/file-enumerator');
const { CascadingConfigArrayFactory } = require('eslint/lib/cli-engine/cascading-config-array-factory');

exports.indexOfFirstStatement = function indexOfFirstStatement(text) {
  let i = 0;
  let slashStarComment = false;

  while (i < text.length) {
    let s = text.substr(i);
    if (slashStarComment) {
      const endComment = s.match(/^.*?\*\//s);
      if (endComment) {
        slashStarComment = false;
        i += endComment[0].length;
      } else {
        return -1;
      }
    } else {
      const ws = s.match(/^\s+/);
      if (ws) {
        i += ws[0].length;
        s = text.substr(i);
      }

      const multilineComment = s.match(/^\/\*/);
      if (multilineComment) {
        slashStarComment = true;
        i += multilineComment[0].length;
      } else {
        const lineComment = s.match(/^\/\/.*/);
        if (lineComment) {
          i += lineComment[0].length;
        } else {
          // No comments, no whitespace.
          return i;
        }
      }
    }
  }
  return -1;
}

exports.partitionFiles = function partitionFiles(files, dir = '') {
  const jessieFiles = [];
  const nonJessieFiles = [];
  for (const f of files) {
    if (!f.endsWith('.js')) {
      nonJessieFiles.push(f);
      continue;
    }

    // maybe a Jessie file
    let isJessie = false;
    // TODO: Maybe lazily read the file.
    const rawText = fs.readFileSync(`${dir}${f}`, 'utf-8', );
    const text = rawText.startsWith('#!') ? `// ${rawText}` : rawText;

    // Find the 'use jessie' token.
    const pos = indexOfFirstStatement(text);
    if (pos >= 0) {
      for (const jessieToken of ['"use jessie";', "'use jessie';"]) {
        if (text.substr(pos, jessieToken.length) === jessieToken) {
          isJessie = true;
          break;
        }
      }
    }

    if (isJessie) {
      jessieFiles.push(f);
    } else {
      nonJessieFiles.push(f);
    }
  }
  return [jessieFiles, nonJessieFiles];
};

exports.partitionFromGlobs = function partitionFromGlobs(globs, cwd = undefined) {
  const ccaf = new CascadingConfigArrayFactory({ cwd });
  const configArrayFactory = {
    getConfigArrayForFile(filePath) {
      try {
        process.env.DISABLE_JESSIE_OVERRIDE = 'true';
        return ccaf.getConfigArrayForFile(filePath);
      } finally {
        delete process.env.DISABLE_JESSIE_OVERRIDE;
      }
    },
  };
  const enumerator = new FileEnumerator({configArrayFactory, cwd});
  const files = [];
  const dir = cwd ? `${cwd}/` : '';
  for (const { filePath } of enumerator.iterateFiles(globs)) {
    if (filePath.startsWith(dir)) {
      files.push(filePath.substr(dir.length));
    } else {
      files.push(filePath);
    }
  }
  // console.log('have files', files);
  const [jessieFiles, nonJessieFiles] = partitionFiles(files, dir);
  return [jessieFiles, nonJessieFiles];
}
