<script lang="typescript">
  // @ts-ignore
  import 'systemjs/dist/system'

  import page from 'page'
  import { onMount } from 'svelte'

  let props: any = {}

  onMount(async () => {
    ;(window as any).pages = {}

    await Promise.all([
      (window as any).System.import('/welcome/bundle.js')
    ])

    setupRouter()
  })

  function setupRouter() {
    const { welcome } = (window as any).pages

    for (const path of ['/', '/getting-started']) {
      page(path, () => {
        props = {
          component: welcome.Router
        }
      })
    }

    page.start()
  }
</script>

<svelte:component this={props.component} />
