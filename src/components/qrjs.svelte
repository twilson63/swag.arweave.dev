<script>
  // @ts-nocheck
  import { onMount } from "svelte";

  export let codeValue;
  export let squareSize;

  let qrcode;

  onMount(() => {
    let script = document.createElement("script");
    script.src = `qrcode.min.js`;
    document.head.append(script);

    script.onload = function () {
      qrcode = new window.QRCode("qrcode", {
        text: codeValue,
        width: squareSize,
        height: squareSize,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: window.QRCode.CorrectLevel.H
      });
    };
  });
</script>

<div id="qrcode" />

<style>
  #qrcode {
    width: 200px;
    height: 200x;
    margin-top: 15px;
  }
</style>
