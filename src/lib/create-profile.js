import { AsyncReader } from "./utils.js";

const { of, ask, lift } = AsyncReader;

/**
 * @param {{handle: string, avatar: string, bio: string}} profile
 *
 * @returns { AsyncReader }
 */
export function createProfile(profile) {
  return of(profile)
    .chain((p) =>
      ask(({ dispatch }) =>
        dispatch({
          data: JSON.stringify({
            handle: p.handle,
            avatar: p.avatar,
            bio: p.bio,
            name: p.handle,
            links: {},
            wallets: {}
          }),
          tags: [
            { name: "Protocol-Name", value: "Account-0.3" },
            { name: "Content-Type", value: "application/json" },
            { name: "handle", value: p.handle },
            { name: "avatar", value: p.avatar }
          ]
        })
      )
    )
    .chain(lift);
}
