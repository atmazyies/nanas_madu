export function formatRupiah(amount) {
  if (amount == null) return "";
  return "Rp " + Math.round(amount).toLocaleString("id-ID");
}
