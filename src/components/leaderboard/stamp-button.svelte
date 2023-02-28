<script>
  // import stampIcon from "../../assets/stamp.svg";
  import StampIcon from "../svgs/stamp.svelte";
  export let count;
</script>

<button
  class="btn btn-ghost btn-block flex items-center pl-[6px] h-[30px] min-h-[0] bg-[#515359] rounded-[23px] cursor-pointer"
  on:click
>
  <div alt="stamp-icon" class="pt-[2px] mr-[6px]">
    <StampIcon />
  </div>
  <div class="text-[18px] text-white">
    +{count}
  </div>
</button>
