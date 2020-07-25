<script lang="typescript">
  import Welcome from '../../../components/Welcome/Welcome.svelte'
  import { onMount } from 'svelte'

  let displayWelcome = true

  onMount(() => {
    setTimeout(() => {
      displayWelcome = false
    }, 1000)
  })
</script>

{#if displayWelcome}
  <Welcome />
{:else}
  <div class="GettingStarted" />
{/if}
