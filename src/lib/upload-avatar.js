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

export async function compressAndResizeImage(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result.toString();

      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        // @ts-ignore
        ctx.webkitImageSmoothingEnabled = false;
        // @ts-ignore
        ctx.msImageSmoothingEnabled = false;
        ctx.imageSmoothingEnabled = false;

        const width = 300;
        const height = 300;
        canvas.width = width;
        canvas.height = height;

        ctx.drawImage(img, 0, 0, width, height);

        canvas.toBlob(
          (blob) => {
            const compressed = new File([blob], file.name, {
              type: file.type,
              lastModified: Date.now()
            });
            resolve(compressed);
          },
          file.type,
          0.6
        );
      };
    };
  });
}
