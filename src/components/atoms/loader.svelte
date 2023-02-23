<script>
  import Portal from "./portal.svelte";

  import loader from "../../assets/loader.gif";
  import loaderIcon from "../../assets/loader-logo.svg";

  export let active;
</script>

{#if active}
  <Portal>
    <div class="l-wrapper">
      <div class="l-gif-container">
        <div class="l-gif">
          <img class="l-gif-img" src={loader} alt="Loading..." />
        </div>
      </div>
      <div class="l-icon-container">
        <div class="l-icon">
          <img class="l-icon-img" src={loaderIcon} alt="Icon" />
        </div>
      </div>
    </div>
  </Portal>
{/if}

<style>
  .l-wrapper {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
  }
  .l-gif-container {
    height: 300px;
    width: 300px;
  }
  .l-gif {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .l-gif-img {
    width: 100%;
  }
  .l-icon-container {
    width: 100%;
  }
  .l-icon {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: -30px 0 0 0;
  }
  .l-icon-img {
    width: 100%;
    max-width: 250px;
  }
</style>
