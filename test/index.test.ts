import { describe, expect, it } from "vitest";
import {
  atob,
  base64ToBytes,
  btoa,
  bytesToBase64,
  decodeBase64,
  decodeBase64Url,
  encodeBase64,
  encodeBase64Url,
  InvalidBase64Error
} from "../src/index.js";

describe("abab compatibility exports", () => {
  it("encodes and decodes binary strings", () => {
    expect(btoa("Hello, world!")).toBe("SGVsbG8sIHdvcmxkIQ==");
    expect(atob("SGVsbG8sIHdvcmxkIQ==")).toBe("Hello, world!");
  });

  it("returns null for non-byte strings and invalid Base64", () => {
    expect(btoa("🚨")).toBeNull();
    expect(atob("not valid base64!")).toBeNull();
  });
});

describe("typed helpers", () => {
  it("encodes and decodes UTF-8 strings", () => {
    expect(encodeBase64("🚨")).toBe("8J+aqA==");
    expect(decodeBase64("8J+aqA==")).toBe("🚨");
  });

  it("encodes and decodes bytes", () => {
    const bytes = new Uint8Array([0, 255, 16, 32]);
    const encoded = bytesToBase64(bytes);

    expect(encoded).toBe("AP8QIA==");
    expect(base64ToBytes(encoded)).toEqual(bytes);
  });

  it("supports Base64URL without padding", () => {
    expect(encodeBase64Url("hello?")).toBe("aGVsbG8_");
    expect(decodeBase64Url("aGVsbG8_")).toBe("hello?");
  });

  it("throws for invalid strict decode helpers", () => {
    expect(() => base64ToBytes("%%%")).toThrow(InvalidBase64Error);
  });
});

