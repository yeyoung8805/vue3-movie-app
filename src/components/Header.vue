<template>
  <header>
    <div class="nav">
      <div class="nav-item">
        <RouterLink class="nav-link"> About </RouterLink>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navigations: [
        {
          name: 'Search',
          href='/',
        },
        {
          name: 'Movie',
          href='/movie',
        },
        {
          name: 'About',
          href='/about',
        }
      ]
    }
  }
}
</script>
