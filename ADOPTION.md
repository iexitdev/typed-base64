# Adoption Plan

Post-publish discovery plan for `typed-base64`.

This package is an independent alternative or migration helper for `abab`; do not imply affiliation with the original project.

## First Search

[Search GitHub package.json dependencies for abab](https://github.com/search?q=%22abab%22%20path%3Apackage.json&type=code)

## Useful Proof Point

Typed Base64, Base64URL, byte helpers, UTF-8 helpers, and null-returning migration exports.

## Pull Request Copy

```md
This removes `abab`, which is deprecated, unsupported, or on a stale release line, and replaces the affected call site with `typed-base64`.

`typed-base64` is an independent TypeScript migration package with zero runtime dependencies. It is not affiliated with the original project.

Validation:
- [ ] npm install
- [ ] npm test
```
