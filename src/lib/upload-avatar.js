import { Async, AsyncReader } from "./utils.js";

const { of, ask, lift } = AsyncReader;

/**
 * @param {File} file
 * @param {string} mimeType
 * @returns { AsyncReader }
 */
export function uploadAvatar(file, mimeType) {
  // convert file to Uint8Array
  return of(file)
    .chain((f) =>
      ask(({ toArrayBuffer, dispatch }) =>
        toArrayBuffer(f)
          // check if file is < 100kb
          .chain((data) =>
            data.byteLength > 100000
              ? Async.Rejected({ message: "File too big!" })
              : Async.Resolved(data)
          )
          // dispatch
          .chain((data) =>
            dispatch({
              data,
              tags: [{ name: "Content-Type", value: mimeType }]
            })
          )
      )
    )
    .chain(lift);
}
