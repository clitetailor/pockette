<script lang="typescript">
  import { fade } from 'svelte/transition'
  import { _ } from 'svelte-i18n'
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
  <h1 class="Welcome__title text-3xl">{$_('welcome.title')}</h1>
</div>
