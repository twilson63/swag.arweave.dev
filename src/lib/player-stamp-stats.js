import { balance } from "../services/stamp-utils.js";

export async function playerStampStats(id) {
  return balance(id);
}
