<script lang="typescript">
  import { fade } from 'svelte/transition'
</script>

<style lang="scss">
  .Welcome {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    background: #24a19c;

    h1 {
      color: white;
    }
  }
</style>

<div class="Welcome" out:fade>
  <h1 class="Welcome__title">Pockette</h1>
</div>
