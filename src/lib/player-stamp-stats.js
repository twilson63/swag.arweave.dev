import { balance } from "../services/stamp-utils.js";

export async function playerStampStats(id) {
  const b = await balance(id);
  return b;
}
