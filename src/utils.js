export async function toTitle(str) {
  return await str.replace(/-/g, ' ').replace(/(^|\s)\S/g, (L) => L.toUpperCase());
}
