<script>
  import profileIcon from "../assets/profile.svg";
</script>

<form class="m-0 p-0" on:submit|preventDefault>
  <div class="hero min-h-screen bg-base-100 relative">
    <div class="hero-content flex-col">
      <h3 class="text-[25px] font-robo-mono-700 uppercase">Join the game</h3>
      <div class="flex flex-col space-y-8 items-center">
        <div>
          <img class="h-[102px] w-[102px]" src={profileIcon} alt="avatar" />
        </div>
        <div class="form-control">
          <label class="underline text-white font-work-sans-400"
            >set profile pic
            <input name="avatar" type="file" class="hidden" />
          </label>
        </div>
        <div class="form-control">
          <input
            name="username"
            placeholder="enter username..."
            class="font-work-sans-400 input rounded-full bg-white color-black"
          />
        </div>
      </div>
    </div>
    <button
      class="absolute bottom-0 btn btn-block rounded-none btn-secondary text-white font-robo-mono-500 text-[20px]"
      >JOIN</button
    >
  </div>
</form>
