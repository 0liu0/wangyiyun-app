<template>
  <
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
import { getMusicitem } from "@/request/api/item";
import { useRoute } from "vue-router";
import MusicItem from '@/components/item/MusicItem.vue'
export default {
  name: "MusicItem",
  components:{MusicItem},
  setup() {
    let id = useRoute().query.id;
    let data = reactive({
      itemmsg: {},
    });

    onMounted(async() => {
      let temp = await getMusicitem(id);
      data.itemmsg = temp.data.playlist
      console.log(data.itemmsg);
    });
  },
};
</script>

<style>
</style>