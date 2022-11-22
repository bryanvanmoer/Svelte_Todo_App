<script>
  import Navbar from "./components/Navbar.svelte";
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
    $store[idx].todos = [getNewTodo(todoName), ...$store[idx].todos];
  }

  function updateTodo(idx, todoIdx, oldValue) {
    $store[idx].todos[todoIdx].complete = !oldValue;
  }
  // $: console.log($store)
</script>

<Navbar />

<div class="container mt-3 dashboard">
  <div class="row ">
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
            class="btn btn-success"
            on:click={() => addProject(projectName)}
          >
            Add Project
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <!-- For each for every project -->
    {#each $store as project, idx (project.id)}
      <div class="col-4 " id={project.id} {idx}>
        <div class="card mt-3 mb-3" style="width: 18rem;">
          <div class="card-body">
            <div class="cardTitle">
              <div class="row">
                <!-- Project Title -->
                <div class="col-6">
                  <h5 class="card-title">{project.title}</h5>
                </div>

                <!-- Button to delete a project -->
                <div class="col-6 text-end">
                  <button
                    type="button"
                    class="btn btn-danger btn-sm"
                    on:click={deleteProject(project.id)}>Delete</button
                  >
                </div>
              </div>
            </div>
            <h6 class="card-subtitle mb-2 text-muted">List of todos</h6>

            <!-- For each for every todo in a project -->
            {#each project.todos as todo, todoIdx (todo.id)}
              <div class="checkbox checkbox-success">
                <input
                  type="checkbox"
                  checked={todo.complete}
                  on:click={() => updateTodo(idx, todoIdx, todo.complete)}
                />
                <label for="checkbox">
                  {todo.title}
                </label>
              </div>
            {/each}

            <!-- Input to add a todo-->
            <div class="input-group mb-3 mt-3">
              <input
                type="text"
                class="form-control"
                placeholder="New Todo"
                aria-label="New Todo"
                aria-describedby="basic-addon2"
                bind:value={todoName}
              />
              <div class="input-group-append">
                <button
                  type="button"
                  class="btn btn-success"
                  on:click={() => addTodo(idx, todoName)}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>

<!-- Project Cards -->
<style>
  .dashboard {
    background-color: lightgray;
    border-radius: 10px;
    box-shadow: 10px;
  }

  .checkbox {
    padding-left: 20px;
  }
</style>
