# Migration Guide

`typed-base64` is an independent alternative or migration helper for projects moving away from `abab`. It is not affiliated with the original package maintainers or project.

## First Command

```sh
npm install typed-base64
```

## Migration Target

- Source package: `abab`
- Replacement package: `typed-base64`
- Source signal: npm deprecation notice points users to native atob and btoa
- Migration direction: Typed Base64, Base64URL, byte helpers, UTF-8 helpers, and null-returning migration exports.

## Compatibility Posture

- Preserved: Null-returning `atob` and `btoa` compatibility exports.
- Improved: UTF-8 helpers, byte helpers, Base64URL helpers, typed input handling, and explicit invalid Base64 errors for strict APIs.
- Intentional difference: Strict helpers throw on invalid input instead of returning `null`.

## Review Checklist

- Replace the old dependency at one migration boundary first.
- Run the package or application test suite after the swap.
- Keep attribution accurate: this package is independent and is not an official successor to `abab`.
