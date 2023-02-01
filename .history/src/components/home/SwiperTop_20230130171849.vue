<template>
  <div id="swipertop">
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="image in swipers.pics" :key="image.targetId">
        <img :src="image.pic" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
// import axios from "axios";
import {getBanner} from '@/request'
import { reactive, onMounted } from "vue";
export default {
  name: "SwiperTop",
  setup() {
    let swipers = reactive({
      pics: [],
    });

    onMounted(() => {
    //   axios.get("http://localhost:3000/banner?type=2").then((res) => {
    //     console.log(res.data.banners);
    //     swipers.pics = res.data.banners;
    //   });

    });

    return { swipers };
  },
};
</script>

<style lang="less">
.van-swipe {
  width: 100%;
  height: 3rem;
  .van-swipe-item {
    padding: 0 .2rem;
    img {
      width: 100%;
      height: 100%;
      border-radius: 0.2rem;
    }
  }
  .van-swipe__indicators {
    .van-swipe__indicator--active {
      background-color: rgb(219, 130, 130);
    }
  }
}
</style>