# eslint-config-jessie

## Release v0.0.6 (1/30/2020)

Files can now be automatically linted using this configuration if they
have a 'use jessie' or "use jessie" directive at the top of the file,
similar to "use strict". Without 'use jessie' or "use jessie", the
default eslint configuration is used. Please see `sample.eslintrc.js`
for an example of how to configure jessie linting and non-jessie
linting in one configuration file.

## Release v0.0.4 (12/17/19)

1. Reorganized how the npm package was packed, making for a lighter
package. All Jessie rules (so far) are now in `index.js`.
2. Updated the peer dependency on `eslint` to `>=6.7.2`
