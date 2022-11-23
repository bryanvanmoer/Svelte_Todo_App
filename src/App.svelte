<script>
  import AddProject from "./components/AddProject.svelte";
  import Navbar from "./components/Navbar.svelte";
  import Projets from "./components/Projets.svelte";
</script>

<Navbar />

<section class="p-3">
  <div class="container g-4">
    <div class="row ">
      <AddProject />
    </div>
    <Projets />
  </div>
</section>

<style>
</style>
