# Jessie

[Jessie](https://github.com/Agoric/Jessie/) is a tiny subset of JavaScript designed for writing smart contracts with confidence. Jessie removes the hazardous parts to create an [object-capability](https://agoric.com/faqs/#ocaps) subset that supports reasoning about code functionality and robustness.

For more information on Jessie, view the [repository on Github](https://github.com/Agoric/Jessie). You can also [view the grammar written in BNF](https://github.com/Agoric/Jessie/blob/master/src/tinyses.js).

# eslint-config-jessie

`eslint-config-jessie` is a package that includes the basic ESLint configuration for enforcing most Jessie rules.

## Installation

Prerequisites: Node.js (>=12.13.1 recommended), npm (>=6.13.4 recommended).

You'll first need to install [ESLint](http://eslint.org). We recommend installing it locally rather than globally:

```
$ npm i eslint --save-dev
```

Next, install `eslint-config-jessie`:

```
$ npm install eslint-config-jessie --save-dev
```

## Usage

You should then setup a configuration file if you don't have one yet:

```
$ ./node_modules/.bin/eslint --init
```

### Automatic Jessie detection

Files can be automatically detected to be linted using this configuration if they
have a `'use jessie';` or `"use jessie";` directive at the top of the file,
similar to `"use strict";`. Without `'use jessie';` (or `"use jessie";`), the
default ESLint configuration is used. Please see [`sample.eslintrc.js`](sample.eslintrc.js)
for an example of how to configure Jessie vs. non-Jessie differentiation for
linting using one configuration file.

### Explicit Jessie linting

If you don't want to use the automatic detection, you will need to turn on the Jessie rules explicitly in the ESLint [config file](https://eslint.org/docs/user-guide/configuring). This config file will have various properties such as `"rules"` and `"env"`. Find or add the `"extends"` property, and set the value to `jessie`:

```
    "extends": "jessie"
```

This will allow you to use the Jessie [shareable config file](https://eslint.org/docs/user-guide/configuring#using-a-shareable-configuration-package).

### Running ESLint

After that, you can run ESLint in your project’s root directory like this:

```
$ ./node_modules/.bin/eslint yourfile.js
```

Additionally, many IDEs will recognize your ESLint settings automatically and show errors and warnings in your code as you type.

## Rules included

Jessie deliberately does not include:

- use of `new`
- semicolon insertion
- `in`
- computed property names
- generators
- async functions
- async iterator functions
- fall-through in switch statements
- naked statements in control-flow branches
- direct eval
- some globals such as `RegExp` and `Date`
- bitwise operators
- do/while
- `this`
- ClassExpression
- GeneratorExpression
- `super`
- MetaProperty
- `delete`
- `++`, `--`
- `instanceof`
- for/in
- `==`, `!=`
- ternary expressions (`?`)

## Future Tasks

1. Add more extensive tests (currently, only the most obvious usages are tested in many cases.)
1. Enforce more of the Jessie subset through an ESLint plugin that creates new rules, including the rules below:

### Jessie rules still to include

- treat `async`, `arguments`, and `eval` as reserved keywords
- avoid this-capture hazards - i.e. looking up a function in an array and calling it can be used to capture the array itself through `this`. Statically rejects array\[+i](arg)
- all objects made by literal expressions (object literals, array literals, function literals, etc) must be tamper-proofed with `harden` before they can be aliased or escape from their static context of origin
- no top level mutability
- restrict index access to number-names, require `+` as a prefix in indices.
- disallow naked statements in switch cases

## Changelog

11-20-2018

- added better error messages
- added basic tests for all rules
- added a config-tester utility
- removed 'strict' as a rule because it does not enforce the strict rules as expected
- recognized that 'curly' does not enforce curly braces within switch statements, which Jessie requires. A test for this is commented out.
test
