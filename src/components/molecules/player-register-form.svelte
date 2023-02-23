<script>
  import profileIcon from "../../assets/profile.svg";
  import hoodieIcon from "../../assets/hoodie-icon.svg";
  import continueIcon from "../../assets/continue.svg";

  import Modal from "./modal.svelte";
  import FormField from "../atoms/form-field.svelte";

  export let id;

  let confirmed = false;

  let avatar = null;
  let username = "";

  function handleJoin() {
    console.log("Registering ...");
    console.log({
      username: username,
      avatar: avatar
    });
    window.location.href = "/";
  }

  function handleContinue() {
    confirmed = true;
  }

  function handleFileInput(event) {
    avatar = event.target.files[0];
  }
</script>

<Modal
  handleAction={confirmed ? handleJoin : handleContinue}
  actionLabel={confirmed ? "Join" : "Enter Username"}
  actionIcon={confirmed
    ? { icon: null, iconStart: null }
    : { icon: continueIcon, iconStart: false }}
  actionDisabled={confirmed && !username}
>
  <div class="pc-wrapper">
    <p class="pc-header">
      {"You've Scanned"}
    </p>
    <div class="pc-u-container">
      <p>{`Stamp Hoodie #${id}`}</p>
    </div>

    <div class="pc-a-container">
      <img src={profileIcon} alt={"Avatar"} />
    </div>

    <div class="psr-d-container" style={confirmed ? "" : "margin: 40px 0 0 0;"}>
      <div class="psr-d-form-container">
        <input
          id="avatar-file-input"
          style="display: none;"
          type="file"
          on:change={handleFileInput}
        />
        <button
          class="psr-p-button"
          on:click={() => document.getElementById("avatar-file-input").click()}
        >
          set profile pic
        </button>
        <FormField
          placeholder={"enter username ..."}
          value={username}
          handleChange={(event) => (username = event.target.value)}
        />
      </div>
    </div>
  </div>
</Modal>

<style>
  .psr-d-container {
    height: calc(100% - 252.5px);
    width: 100%;
    margin: 5px 0 0 0;
    padding: 0 25px;
    display: flex;
    justify-content: center;
  }
  .psr-d-container img {
    height: 100%;
  }
  .psr-p-button {
    margin: 0 0 30px 0;
    color: #ffffff;
    text-decoration: underline;
  }
  .psr-d-form-container {
    height: 100%;
    width: 100%;
    padding: 10px 0 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
