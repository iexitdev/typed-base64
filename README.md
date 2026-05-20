# typed-base64

Typed Base64 helpers with migration-compatible `atob` and `btoa` exports.

`abab` is deprecated because modern runtimes include native `atob()` and `btoa()`. This package keeps the old null-returning compatibility behavior for migration and adds byte, UTF-8, and Base64URL helpers that are easier to use correctly.

## Install

```sh
npm install typed-base64
```

## Usage

```ts
import { atob, btoa, decodeBase64, encodeBase64Url } from "typed-base64";

btoa("Hello, world!");
// "SGVsbG8sIHdvcmxkIQ=="

atob("SGVsbG8sIHdvcmxkIQ==");
// "Hello, world!"

encodeBase64Url("hello?");
// "aGVsbG8_"

decodeBase64("8J+aqA==");
// "🚨"
```

## API

### `btoa(input)`

Compatibility encoder. Returns `null` when input contains characters outside `U+0000` to `U+00FF`.

### `atob(input)`

Compatibility decoder. Returns `null` for invalid Base64.

### `encodeBase64(input)`

Encodes a UTF-8 string or `Uint8Array`.

### `decodeBase64(input)`

Decodes Base64 to a UTF-8 string.

### `bytesToBase64(bytes)` / `base64ToBytes(input)`

Byte-oriented helpers.

### `encodeBase64Url(input)` / `decodeBase64Url(input)`

URL-safe Base64 helpers without padding.

## Migration Position

`typed-base64` is an independent alternative or migration helper for projects moving away from `abab`. It is not affiliated with the original package maintainers or project.

For release context, see the local [migration guide](./MIGRATION.md), [examples](./EXAMPLES.md), [compatibility notes](./COMPATIBILITY.md), [source metadata](./SOURCE_METADATA.md), and [adoption plan](./ADOPTION.md).

