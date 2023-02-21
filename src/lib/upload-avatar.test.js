// @ts-nocheck
import { assert } from "asserts";
import { uploadAvatar } from "./upload-avatar.js";
import { Async } from "./utils.js";

const { test } = Deno;

function dispatch() {
  return Async.Resolved({ id: "1234" });
}

function toArrayBuffer(file) {
  const p = new Promise((resolve, reject) => {
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
  const result = await uploadAvatar(file, file.type).runWith({
    dispatch,
    toArrayBuffer: Async.fromPromise(toArrayBuffer),
  }).toPromise();
  assert(result.id === "1234");
});
