<script context="module" lang="typescript">
  let theme = 'theme-light'
</script>

<style lang="scss">
  .ThemeProvider {
    width: 100%;
    height: 100%;
  }

  .ThemeProvider.theme-light {
    --primary: hsl(178, 63%, 39%);

    --text: hsl(35, 0%, 20%);

    :global(.text) {
      padding: 0;

      color: var(--text);
    }
  }
</style>

<div class="ThemeProvider {theme}">
  <slot />
</div>
