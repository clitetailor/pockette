<script lang="typescript">
  import Welcome from '../../../components/Welcome/Welcome.svelte'
  import { onMount } from 'svelte'
  import { _ } from 'svelte-i18n'

  let displayWelcome = true
  let categories: string[] = [
    'Food',
    'Drink',
    'Restaurant',
    'Car',
    'Travel'
  ]

  let newCatergory = ''

  onMount(() => {
    setTimeout(() => {
      displayWelcome = false
    }, 1000)
  })

  function handleAddItemKeydown(e: KeyboardEvent) {
    if (e.key === 'Enter' && newCatergory.trim()) {
      categories = [...categories, newCatergory]
      newCatergory = ''
    }
  }
</script>

<style lang="scss">
  .GettingStarted {
    width: 100%;
    height: 100%;

    display: flex;
    flex-flow: column;

    padding: 15px;

    .GettingStarted__top {
      flex: 1 1 0;
    }
  }
</style>

{#if displayWelcome}
  <Welcome />
{:else}
  <div class="GettingStarted">
    <div class="GettingStarted__top">
      <p class="text">
        {$_('getting-started.enter-categories')}
      </p>

      <ul>
        {#each categories as item}
          <li>{item}</li>
        {/each}
      </ul>
    </div>

    <div class="GettingStarted__bottom flex flex-row">
      <input
        type="text"
        on:keydown={handleAddItemKeydown}
        bind:value={newCatergory}
        placeholder={$_('getting-started.new-category')} />

      <button>{$_('getting-started.next')}</button>
    </div>
  </div>
{/if}
