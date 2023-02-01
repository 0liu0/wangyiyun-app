<template>
  <div class="musiclist">
    <div class="musictop">
      <div class="topleft">发现好歌单</div>
      <div class="topright">查看更多</div>
    </div>
    <van-swipe :loop="false" :width="300" :show-indicators="flase">
      <van-swipe-item class="list" v-for="l in songList" :key="l.id">
        <img :src="l.picUrl" />
        <div class="nums">
          {{ l.playCount }}
        </div>
        {{ l.name }}
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted, computed } from "vue";
import { getSongList } from "@/request/api/home";
export default {
  name: "MusicList",
  setup() {
    let obj = reactive({
      songList: [],
    });

    // 挂载时加载数据
    onMounted(async () => {
      let List = await getSongList();
      obj.songList = List.data.result;
    });

    // 计算属性
    let songList = computed(() => {
      obj.songList.forEach((value) => {
        let count = value.playCount;
        if (count >= 100000000) {
          value.playCount = (count / 100000000).toFixed(1) + "亿";
        } else if (count >= 10000) {
          value.playCount = (count / 10000).toFixed(1) + "万";
        }
      });
      return obj.songList;
    });

    return { songList };
  },
};
</script>

<style lang="less" scoped>
.musictop {
  display: flex;
  padding: 0 0.2rem;
  justify-content: space-between;
  align-items: center;
  .topleft {
    font-weight: 900;
    font-size: 0.32rem;
  }
  .topright {
    padding: 3px;
    border: 1px solid black;
    border-radius: 12px;
    font-size: 0.2rem;
  }
}

.musiccontent {
  display: flex;
  .list {
    width: ;
  }
}
</style>