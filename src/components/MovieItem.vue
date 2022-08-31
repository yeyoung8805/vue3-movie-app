<template>
  <div></div>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      // 화살표 함수 형식. 아래와 같은 내용이다.
      // dafault: () => ({}),
      default: function () {
        return {};
      },
    },
  },
};
</script>
