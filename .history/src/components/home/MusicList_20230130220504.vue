<template>
  <div class="musiclist">
    <div class="musictop">
      <div class="topleft">发现好歌单</div>
      <div class="topright">查看更多</div>
    </div>
    <van-swipe
      class="musiccontent"
      :loop="false"
      :width="140"
      :show-indicators="false"
    >
      <van-swipe-item class="list" v-for="l in songList" :key="l.id">
        <img :src="l.picUrl" />
        <div class="nums">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-l24gl-play"></use>
          </svg>
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
  margin-top: 10px;
  display: flex;
  padding: 5px;
  height: 4rem;
  .list {
    position: relative;
    padding: 0 4px;
    img {
      width: 100%;
      height: 2.6rem;
    }
    .nums {
        position: absolute;
        display: flex;
        align-items: center;
        top: 8px;
        right: 8px;
        font-size: .24rem;
        font-weight: 400;
        color: white;
        .icon {
            width: 20px;
            height: 20px;
            color: white;
        }
    }
  }
}
</style>