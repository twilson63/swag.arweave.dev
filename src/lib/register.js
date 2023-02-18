import crocks from "crocks";

const { Async, ReaderT } = crocks;
const { ask, of, lift } = ReaderT(Async);

/**
 * @param {Player} player - player profile data
 * @returns {AsyncReader}
 */
export function register(player) {
  return of(player)
    // TODO: validate player model
    .chain((player) =>
      ask(({ dispatch }) =>
        Async.fromPromise(dispatch)({
          data: JSON.stringify(player),
          tags: [
            { name: "Content-Type", value: "application/json" },
            { name: "App-Name", value: "SmartWeaveContract" },
            { name: "App-Version", value: "0.3.0" },
            { name: "Contract-Src", value: "" },
            {
              name: "Init-State",
              value: JSON.stringify({
                balances: { [player.addr]: 1 },
                pairs: [],
                swag: player.code,
              }),
            },
            { name: "Protocol-Name", value: "Account-0.3" },
            { name: "handle", value: player.handle },
            { name: "Type", value: "profile" },
            { name: "Description", value: player.bio },
            { name: "Title", value: player.handle + " profile" },
          ],
        })
      )
    ).chain(lift);
}

/**
 * {
          'Content-Type': 'application/json',
          'App-Name': 'SmartWeaveContract',
          'App-Version': '0.3.0',
          'Contract-Src': '',
          'Init-State': JSON.stringify({
            balances: { [player.addr]:1 }
          }),

        }
 */
