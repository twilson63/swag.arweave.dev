const { WarpFactory } = window.warp;

const warp = WarpFactory.forMainnet();
export function register(txId) {
  return warp.register(txId, "node2");
}
