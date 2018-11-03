# Jessie

[Jessie](https://github.com/Agoric/Jessie/) is a tiny subset of JavaScript designed for writing smart contracts with confidence. Jessie removes the hazardous parts to create an [object-capability](https://agoric.com/faqs/#ocaps) subset that supports reasoning about code functionality and robustness.

For more information on Jessie, view the [repository on Github](https://github.com/Agoric/Jessie). You can also [view the grammar written in BNF](https://github.com/Agoric/Jessie/blob/master/src/tinyses.js). 

# eslint-config-jessie

`eslint-config-jessie` is a package that includes the basic ESLint configuration for enforcing most Jessie rules. 

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-config-jessie`:

```
$ npm install eslint-config-jessie --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-config-jessie` globally.

## Usage

Add `eslint-config-jessie` to the `extends` property value:

```
{
    "extends": "eslint-config-jessie"
}
```

You can also omit the eslint-config- and it will be automatically assumed by ESLint:

```
{
    "extends": "jessie"
}
```

## Rules included

Jessie deliberately does not include:
* use of `new`
* semicolon insertion
* `in`
* computed property names
* generators
* async functions
* async iterator functions
* fall-through in switch statements
* naked statements in control-flow branches
* direct eval
* some globals such as `RegExp` and `Date`
* bitwise operators
* do/while
* `this`
* ClassExpression
* GeneratorExpression
* `super`
* MetaProperty
* `delete`
* `++`, `--`
* `instanceof`
* for/in
* `==`, `!=`
* ternary expressions (`?`)

## Future Tasks

### Tests

Each of these rules should have a few basic tests. 

### Jessie rules still to include

* treats `async`, `arguments`, and `eval` as reserved keywords
* avoid this-capture hazards - i.e. looking up a function in an array and calling it can be used to capture the array itself through `this`. Statically rejects array\[+i](arg)
* all objects made by literal expressions (object literals, array literals, function literals, etc) must be tamper-proofed with `def` before they can be aliased or escape from their static context of origin
* no top level mutability
* restrict index access to number-names, require `+` as a prefix in indices.

