
<script>
    import IconButton from "./icon-button.svelte";
    import StampCount from "./stamp-count.svelte";
    export let count;
</script>

<style>

    .top-players-label-stamps {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      padding-left: 6px;
      width: 68px;
      height: 30px;
      background: #515359;
      border-radius: 23.9625px;
    }
    
</style>

<div class="top-players-label-stamps">
    <IconButton />
    <StampCount count={count} color="white"/>
</div>