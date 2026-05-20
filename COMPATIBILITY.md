# Compatibility Notes

`typed-base64` is an independent migration package for projects leaving `abab`; it is not affiliated with the original package maintainers or project.

| Area | Notes |
| --- | --- |
| Preserved migration surface | Null-returning `atob` and `btoa` compatibility exports. |
| Improvements | UTF-8 helpers, byte helpers, Base64URL helpers, typed input handling, and explicit invalid Base64 errors for strict APIs. |
| Intentional difference | Strict helpers throw on invalid input instead of returning `null`. |
