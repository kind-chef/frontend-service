export async function sha256(secret) {
  return await window.crypto.subtle.digest('SHA-256', secret);
}
