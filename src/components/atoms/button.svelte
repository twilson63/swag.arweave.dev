<script>
  export let type;
  export let label;
  export let disabled;
  export let handlePress;
  export let icon;
  export let iconStart;

  function getStyleType(type) {
    switch (type) {
      case "modal":
        return {
          wrapper: `mb-wrapper`,
          label: `mb-label`,
          icon: `mi-wrapper ${iconStart ? "mi-icon-start" : "mi-icon-end"}`
        };
      default:
        return {};
    }
  }

  let styleType = getStyleType(type);
</script>

<button on:click|stopPropagation class={styleType.wrapper} {disabled}>
  <div class="label-wrapper">
    {#if icon && iconStart}
      <div class={styleType.icon}>
        <img src={icon} alt={"Stamp Icon"} />
      </div>
    {/if}
    <span class={styleType.label}>{label}</span>
    {#if icon && !iconStart}
      <div class={styleType.icon}>
        <img src={icon} alt={"Stamp Icon"} />
      </div>
    {/if}
  </div>
</button>

<style>
  .mb-wrapper {
    height: 100%;
    max-height: 60px;
    width: 100%;
    border-bottom-left-radius: 24px;
    border-bottom-right-radius: 24px;
    background: #ff5f15;
  }
  .mb-wrapper:disabled {
    background: #aaaaaa;
    cursor: not-allowed;
  }

  .mb-wrapper:hover {
    background: #fc5203;
  }
  .mb-label {
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    color: #ffffff;
  }
  .mi-wrapper {
    width: 15px;
  }

  .mi-icon-start {
    margin: 0 12.5px 0 0;
  }

  .mi-icon-end {
    margin: 0 0 0 12.5px;
  }

  .label-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
