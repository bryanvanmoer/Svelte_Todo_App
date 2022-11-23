<script>
  import { store, deleteProject } from "../stores/store";
  import Todo from "../components/Todo.svelte";

  export let project;
  export let idx;

  let todoName = "";

  function getNewTodo(todoName) {
    return {
      id: `_${Math.random().toString(35).substr(2, 9)}`,
      title: todoName,
      complete: false,
    };
  }

  // function deleteTodo() {
  //   // let cards = $store[0].cards
  //   if ($store.length > 1) {
  //     $store[0].todos = $store[0].todos.slice(0, -1);
  //   }
  // }

  function addTodo(idx, todoName) {
    if (todoName == "") {
      return;
    }
    $store[idx].todos = [getNewTodo(todoName), ...$store[idx].todos];
    todoName = "";
  }

  // $: console.log($store)
</script>

<div class="col-4">
  <div class="card bg-dark text-light">
    <div class="card-body">
      <div class="row">
        <!-- Project Title -->
        <div class="col-6">
          <h3 class="card-title mb-3">{project.title}</h3>
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

      <p class="card-text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      <h5 class="card-subtitle mb-2 ">List of todos</h5>
      {#each project.todos as todo, todoIdx (todo.id)}
        <Todo {todo} {todoIdx} {project} {idx} />
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
            class="btn btn-primary"
            on:click={() => addTodo(idx, todoName)}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
