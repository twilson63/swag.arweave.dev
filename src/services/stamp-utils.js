//import Stamps from "https://esm.sh/@permaweb/stampjs";
import Stamps from "@permaweb/stampjs";
import { prop } from "ramda";

const { WarpFactory } = window.warp;

const warp = WarpFactory.forMainnet();
const stamps = Stamps.init({ warp });

export function stamp(tx) {
  return stamps.stamp(tx);
}

export function count(tx) {
  return stamps.count(tx).then(prop("total"));
}

export function filter(logic) {
  return stamps.filter(logic);
}
