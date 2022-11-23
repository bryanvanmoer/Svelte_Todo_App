<script>
  export let todo;
  export let todoIdx;
  export let idx;
  export let project;

  import { store } from "../stores/store";

  function updateTodo(idx, todoIdx, oldValue) {
    $store[idx].todos[todoIdx].complete = !oldValue;
  }
</script>

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

<style>
  .checkbox {
    padding-left: 20px;
  }
</style>
