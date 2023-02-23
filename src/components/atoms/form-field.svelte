<script>
  export let placeholder;
  export let type = "text";
  export let value = "";
  export let handleChange;
</script>

<div>
  <input class="form-field" {placeholder} {type} {value} on:input={handleChange} />
</div>

<style>
  .form-field {
    height: 40px;
    background: #f2f3f4;
    color: #515359;
    font-size: 16px;
    border-radius: 23px;
    padding: 0 15px !important;
  }
</style>
