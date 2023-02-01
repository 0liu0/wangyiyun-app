<template>
  <h1>欢迎光临！！！</h1>
</template>

<script>
import { reactive, toRefs,onMounted } from "vue";
import {getMusicitem} from '@/request/api/item'
import { useRoute } from "vue-router";
export default {
  name: "MusicItem",
  setup() {
    let id = useRoute().query.id;
    let data = reactive({
      itemmsg:{}
    })

    onMounted()

  },
};
</script>

<style>
</style>