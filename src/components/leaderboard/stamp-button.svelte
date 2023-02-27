<script>
  import stampIcon from "../../assets/stamp.svg";

  export let count;
</script>

<button
  class="btn btn-ghost flex items-center pl-[6px] w-[68px] h-[30px] bg-[#515359] rounded-[23px] cursor-pointer"
  on:click
>
  <!-- <img src={stampIcon} alt="stamp-icon" class="pt-[2px] mr-[6px] h-[16px]" /> -->
  <div class="text-[18px] text-white">
    +{count}
  </div>
</button>
