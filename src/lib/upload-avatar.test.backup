/* global Deno */
// @ts-nocheck
import { assert } from "asserts";
import { uploadAvatar, compressAndResizeImage } from "./upload-avatar.js";
import { Async } from "./utils.js";

const { test } = Deno;

function dispatch() {
  return Async.Resolved({ id: "1234" });
}

function toArrayBuffer(file) {
  const p = new Promise((resolve) => {
    const fr = new FileReader();
    fr.readAsArrayBuffer(file);
    fr.addEventListener("loadend", (evt) => {
      resolve(evt.target.result);
    });
  });
  return p;
}

test("uploadAvatar", async () => {
  const file = new File(["Hello World"], "foo.txt", { type: "text/plain" });
  const result = await uploadAvatar(file, file.type)
    .runWith({
      dispatch,
      toArrayBuffer: Async.fromPromise(toArrayBuffer)
    })
    .toPromise();
  assert(result.id === "1234");
});

test("compressAndResizeImage", async () => {
  const file = new File([""], "darthvader.png");
  Object.defineProperty(file, "size", { value: 1024 * 1024 + 1 });
  const result = await compressAndResizeImage(file, file.type)
    .runWith({
      dispatch,
      toArrayBuffer: Async.fromPromise(toArrayBuffer)
    })
    .toPromise();
  assert(file.size > result.size);
});
