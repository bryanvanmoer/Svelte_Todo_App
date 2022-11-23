<script>
  import { store } from "../stores/store";
  import Projet from "../components/Projet.svelte";
</script>

<div class="row g-4">
  {#each $store as project, idx (project.id)}
    <Projet {project} {idx} />
  {/each}
</div>
