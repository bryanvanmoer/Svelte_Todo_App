<script>
  import Navbar from "./components/Navbar.svelte";
  import Projets from "./components/Projets.svelte";
  import { store, addProject, deleteProject } from "./stores/store";

  let projectName = "";
  let todoName = "";

  function getNewTodo(todoName) {
    return {
      id: `_${Math.random().toString(35).substr(2, 9)}`,
      title: todoName,
      complete: false,
    };
  }

  function deleteTodo() {
    // let cards = $store[0].cards
    if ($store.length > 1) {
      $store[0].todos = $store[0].todos.slice(0, -1);
    }
  }

  function addTodo(idx, todoName) {
    if (todoName == "") {
      return;
    }
    $store[idx].todos = [getNewTodo(todoName), ...$store[idx].todos];
  }

  function updateTodo(idx, todoIdx, oldValue) {
    $store[idx].todos[todoIdx].complete = !oldValue;
  }
</script>

<Navbar />

<section class="p-3">
  <div class="container g-4">
    <div class="row ">
      <form on:submit={() => addProject(projectName)}>
        <div class="col-4 mt-3">
          <!-- Input to add a new project -->
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Project Name"
              aria-label="Project Name"
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
    </div>

    <Projets />
  </div>
</section>

<!-- Project Cards -->
<style>
  .checkbox {
    padding-left: 20px;
  }
</style>
