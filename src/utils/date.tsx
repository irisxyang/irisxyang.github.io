// src/utils/date.ts
export function formatDate(iso: string): string {
  const parts = iso.split("-"); // "2026-07-01" → ["2026","07","01"]
  const hasDay = parts.length >= 3;

  const date = new Date(iso + (hasDay ? "T00:00:00" : "-01T00:00:00"));

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    ...(hasDay && { day: "numeric" }), // only include `day` when present
  });
}
