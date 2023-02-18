// import crocks from "crocks";
// import { compose, pluck, path, head, prop } from "ramda";
import { balance } from "../services/stamp-utils.js";
// const { Async, ReaderT } = crocks;
// const { of, ask, lift } = ReaderT(Async);

export async function playerStampStats(id) {
  const b = await balance("9x24zjvs9DA5zAz2DmqBWAg6XcxrrE-8w3EkpwRm4e4");
  return b;
}
