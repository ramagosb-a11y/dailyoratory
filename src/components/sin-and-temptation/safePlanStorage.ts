type StorageAccess = () => Pick<Storage, "getItem" | "setItem" | "removeItem">;
type Result<T> = { ok: true; value: T } | { ok: false; message: string };

export function readPrivatePlan(access: StorageAccess, key: string, defaults: Record<string, string>): Result<Record<string, string> | null> {
  try {
    const raw = access().getItem(key);
    if (raw === null) return { ok: true, value: null };
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("Invalid plan");
    const record = parsed as Record<string, unknown>;
    const result = { ...defaults };
    for (const field of Object.keys(defaults)) {
      if (record[field] === undefined) continue;
      if (typeof record[field] !== "string") throw new Error("Invalid field");
      result[field] = record[field];
    }
    return { ok: true, value: result };
  } catch { return { ok: false, message: "The saved plan could not be loaded. Storage may be unavailable or the saved data may be damaged. Your current entries are unchanged." }; }
}
export function writePrivatePlan(access: StorageAccess, key: string, values: Record<string, string>, defaults: Record<string, string>): Result<null> {
  try {
    const known = Object.fromEntries(Object.keys(defaults).map((field) => [field, values[field] ?? defaults[field]]));
    access().setItem(key, JSON.stringify(known));
    return { ok: true, value: null };
  } catch { return { ok: false, message: "The plan could not be saved in this browser. Your entries remain here until you leave or reload." }; }
}
export function removePrivatePlan(access: StorageAccess, key: string): Result<null> {
  try { access().removeItem(key); return { ok: true, value: null }; }
  catch { return { ok: false, message: "The form was reset, but saved browser data could not be removed. Check this site’s browser storage settings before using a shared device." }; }
}
