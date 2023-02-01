<template>
  <h1>欢迎光临！！！</h1>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useRoute } from "vue-router";
export default {
  name: "MusicItem",
  setup() {
    let id = useRoute().query.id;
    let data
  },
};
</script>

<style>
</style>