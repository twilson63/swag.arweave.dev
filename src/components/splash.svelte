<script>
  import loader from "../assets/loader.gif";
  import loaderIcon from "../assets/loader-logo.svg";

  export let msg;
</script>

<section class="flex flex-col items-center justify-center">
  <img src={"https://arweave.net/IkMJRqi_0Xx_QhstK4WE3rsQqQxC07n84UagPgqGXfc"} alt="heading" />
  <img src={loaderIcon} alt="arweave-loader" />
  {#if msg}
    <div class="mt-8 text-xl bg-secondary text-white w-full">{msg}</div>
  {/if}
</section>
