<template>
  <item-music :info="" />
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
import { getMusicitem } from "@/request/api/item";
import { useRoute } from "vue-router";
import ItemMusic from '@/components/item/ItemMusic.vue';
export default {
  name: "MusicItem",
  components: { ItemMusic },
  setup() {
    ItemMusic
    let id = useRoute().query.id;
    let data = reactive({
      itemmsg: {},
    });

    onMounted(async () => {
      let temp = await getMusicitem(id);
      data.itemmsg = temp.data.playlist;
      console.log(data.itemmsg);
    });

    return { ...toRefs(data) };
  },
};
</script>

<style>
</style>