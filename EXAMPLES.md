# Examples

`typed-base64` is an independent package. It is not affiliated with `abab` or its maintainers.

## `abab` to `typed-base64`

```ts
import { atob, btoa, decodeBase64Url, encodeBase64Url } from "typed-base64";

const legacy = atob("SGVsbG8=");
const token = encodeBase64Url("user:42");
```
