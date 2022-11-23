<script>
  import { store, addProject, deleteProject } from "../stores/store";
  let projectName = "";
</script>

<form on:submit={() => addProject(projectName)}>
  <div class="col-4 mt-3">
    <!-- Input to add a new project -->
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="New Project"
        aria-label="New Project"
        aria-describedby="basic-addon2"
        bind:value={projectName}
      />
      <div class="input-group-append">
        <button
          type="button"
          class="btn btn-primary"
          on:click={() => addProject(projectName)}
        >
          Add Project
        </button>
      </div>
    </div>
  </div>
</form>
