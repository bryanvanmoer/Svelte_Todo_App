<script>
    export let idx;

    import {store} from "../stores/store";

    function updateProjetDescription(idx, newText){
        $store[idx].description = newText;
    }

</script>

<div class="checkbox checkbox-success">

    <button
            type="button"
            id="btnUpdate"
            class="btn btn-primary"
            on:click={() => updateProjetDescription(idx, "nouvText")}
    > update</button>

</div>

<style>
    .checkbox {
        padding-left: 20px;
    }
</style>