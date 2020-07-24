<script lang="typescript">
  import page from 'page'
  import { onMount, onDestroy } from 'svelte'

  import Home from './pages/index/Home.svelte'
  import { setupI18n } from './i18n/index'

  setupI18n()

  let props: any = {
    component: Home
  }

  let test = false

  page('/', () => {
    props = {
      component: Home
    }
  })

  onMount(() => {
    page.start()
  })
</script>

<svelte:component this={props.component} {...props} />
