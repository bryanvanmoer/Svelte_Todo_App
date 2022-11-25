<script>
    export let idx;
    export let project;

    import {store} from "../stores/store";

    function updateDesc(idx, newText){
        $store[idx].description = newText;
    }

</script>

<div class="row">
    <div class="col-6">
        <p class="card-text">
            Description :  {project.description}
        </p>
    </div>
    <div class="col-6 text-end">
        <button
                type="button"
                id="btnUpdate"
                class="btn btn-primary"
                on:click={() => updateDesc(idx, "nouvText")}
        > update</button>
    </div>

</div>

<style>
    .checkbox {
        padding-left: 20px;
    }
</style>