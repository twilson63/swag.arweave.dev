<script>
  // TODO: Use theme
  import Portal from "../atoms/portal.svelte";
  import Button from "../atoms/button.svelte";

  export let actionLabel;
  export let handleAction;
  export let actionIcon;
</script>

<Portal>
  <div class="m-wrapper">
    <div class="m-container">
      <div class="m-body-container">
        <slot />
      </div>
      <div class="m-action-container">
        <Button
          type={"modal"}
          label={actionLabel}
          handlePress={handleAction}
          icon={actionIcon.icon}
          iconStart={actionIcon.start}
        />
      </div>
    </div>
  </div>
</Portal>

<style>
  .m-wrapper {
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
  .m-container {
    position: relative;
    height: 500px;
    max-height: 75vh;
    width: 375px;
    max-width: 90vw;
    background: #222326;
    border-radius: 24px;
  }
  .m-body-container {
    height: calc(100% - 60px);
    width: 100%;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
    overflow: auto;
    scrollbar-width: none;
  }
  
  .m-action-container {
    height: 60px;
    width: 100%;
    position: absolute;
    bottom: 0;
    width: 100%;
  }
</style>
