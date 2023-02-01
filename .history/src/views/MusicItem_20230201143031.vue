<template>
  <item-music-top :myinfo="itemmsg" />
  <item-music-bottom :/>
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
import { getMusicitem,getSongs } from "@/request/api/item";
import { useRoute } from "vue-router";
import ItemMusicTop from '@/components/item/ItemMusicTop.vue';
import ItemMusicBottom from '@/components/item/ItemMusicBottom.vue';
export default {
  name: "MusicItem",
  components: { ItemMusicTop,ItemMusicBottom },
  setup() {
    let id = useRoute().query.id;
    let data = reactive({
      itemmsg: {},
      musicList:[]
    });

    onMounted(async () => {
      // 得到歌单的相关信息
      let temp = await getMusicitem(id);
      data.itemmsg = temp.data.playlist;
      // 得到歌单所有歌曲
      let temp1 = await getSongs(id)
      data.musicList = temp1.data.songs
      console.log(data.musicList);
      // 防止刷新页面，数据丢失，将数据保存到sessionStorage中
      sessionStorage.setItem('itemDetail',JSON.stringify(data))
    });

    return { ...toRefs(data) };
  },
};
</script>

<style>
</style>