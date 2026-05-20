export type Base64Input = string | Uint8Array;

export class InvalidBase64Error extends Error {
  constructor(message = "Invalid Base64 input") {
    super(message);
    this.name = "InvalidBase64Error";
  }
}

const encoder = new TextEncoder();
const decoder = new TextDecoder();
const chunkSize = 0x8000;

export function btoa(input: string): string | null {
  if (hasNonByteCharacters(input)) {
    return null;
  }

  try {
    return globalThis.btoa(input);
  } catch {
    return null;
  }
}

export function atob(input: string): string | null {
  try {
    return globalThis.atob(input);
  } catch {
    return null;
  }
}

export function encodeBase64(input: Base64Input): string {
  return bytesToBase64(toBytes(input));
}

export function decodeBase64(input: string): string {
  return decoder.decode(base64ToBytes(input));
}

export function encodeBase64Url(input: Base64Input): string {
  return encodeBase64(input).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

export function decodeBase64Url(input: string): string {
  return decodeBase64(fromBase64Url(input));
}

export function bytesToBase64(bytes: Uint8Array): string {
  let binary = "";

  for (let index = 0; index < bytes.length; index += chunkSize) {
    const chunk = bytes.subarray(index, index + chunkSize);
    binary += String.fromCharCode(...chunk);
  }

  const encoded = btoa(binary);

  if (encoded === null) {
    throw new InvalidBase64Error("Unable to encode bytes as Base64");
  }

  return encoded;
}

export function base64ToBytes(input: string): Uint8Array {
  const decoded = atob(input);

  if (decoded === null) {
    throw new InvalidBase64Error();
  }

  const bytes = new Uint8Array(decoded.length);

  for (let index = 0; index < decoded.length; index += 1) {
    bytes[index] = decoded.charCodeAt(index);
  }

  return bytes;
}

function toBytes(input: Base64Input): Uint8Array {
  return typeof input === "string" ? encoder.encode(input) : input;
}

function fromBase64Url(input: string): string {
  const normalized = input.replace(/-/g, "+").replace(/_/g, "/");
  const paddingLength = (4 - (normalized.length % 4)) % 4;
  return normalized + "=".repeat(paddingLength);
}

function hasNonByteCharacters(input: string): boolean {
  for (let index = 0; index < input.length; index += 1) {
    if (input.charCodeAt(index) > 0xff) {
      return true;
    }
  }

  return false;
}

export default {
  atob,
  btoa,
  base64ToBytes,
  bytesToBase64,
  decodeBase64,
  decodeBase64Url,
  encodeBase64,
  encodeBase64Url
};

