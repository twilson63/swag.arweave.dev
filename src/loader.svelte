<script>
    import Portal from "./portal.svelte";
    import loader from "./assets/loader.gif";
    import loaderIcon from "./assets/loader-icon.svg";

    export let active;
</script>

{#if active}
<Portal>
    <div class="loader-wrapper">
        <div class="loader-gif-container">
            <div class="loader-gif">
                <img class="loader-gif-img" src={loader} alt="Loading..."/>
            </div>
        </div>
        <div class="loader-icon-container">
            <div class="loader-icon">
                <img class="loader-icon-img" src={loaderIcon} alt="Icon"/>
            </div>
        </div>
    </div>
</Portal>
{/if}

<style>
    .loader-wrapper {
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
    .loader-gif-container {
        height: 200px;
        width: 200px;
    }
    .loader-gif {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .loader-gif-img {
        width: 100%;
    }
    .loader-icon-container {
        width: 100%;
    }
    .loader-icon {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: -30px 0 0 0;
    }
    .loader-icon-img {
        width: 100%;
        max-width: 250px;
    }
</style>