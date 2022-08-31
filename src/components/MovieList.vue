<template>
  <div class="container">
    <div class="inner">
      <MovieItem />
    </div>
  </div>
</template>

<script>
import MovieItem from "~/components/MovieItem.vue";

export default {
  components: {
    MovieItem,
  },
  data() {
    return {
      movies: [],
    };
  },
};
</script>
