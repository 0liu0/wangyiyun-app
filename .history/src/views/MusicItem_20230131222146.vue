<template>
  <item-music-top :myinfo="itemmsg" />
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
import { getMusicitem } from "@/request/api/item";
import { useRoute } from "vue-router";
import ItemMusicTop from '@/components/item/ItemMusicTop.vue';
export default {
  name: "MusicItem",
  components: { ItemMusicTop },
  setup() {
    let id = useRoute().query.id;
    let data = reactive({
      itemmsg: {},
    });

    onMounted(async () => {
      let temp = await getMusicitem(id);
      data.itemmsg = temp.data.playlist;
      // 防止刷新页面，数据丢失，将数据保存到sessionStorage中
      sessionStorage.setItem('itemDetail',)
      // console.log(data.itemmsg);
    });

    return { ...toRefs(data) };
  },
};
</script>

<style>
</style>