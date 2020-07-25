<script lang="typescript">
  import page from 'page'
  import { onMount, onDestroy } from 'svelte'

  import GettingStarted from './pages/getting-started/GettingStarted/GettingStarted.svelte'
  import { setupI18n } from './i18n/index'

  setupI18n()

  let props: any = {
    component: GettingStarted
  }

  page('/', () => {
    props = {
      component: GettingStarted
    }
  })

  onMount(() => {
    page.start()
  })
</script>

<svelte:component this={props.component} {...props} />
