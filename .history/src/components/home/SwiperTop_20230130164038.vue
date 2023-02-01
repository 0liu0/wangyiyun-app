<template>
  <van-swipe :autoplay="3000" lazy-render>
    <van-swipe-item v-for="image in images" :key="image">
      <img :src="image" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
import axios from 'axios'
import {reactive} from 'vue'
export default {
  name: "SwiperTop",
  setup() {
    let swipers = reactive({
        pics:[]
    });
    axios.get(
        url = "http://localhost:3000http://localhost:3000/banner?type=2"
    ).then((res)=>{
        swipers.pics = res
    })
  },
};
</script>

<style lang="less">
.van-swipe {
  width: 100%;
  padding: 10px;
  .van-swipe__track {
    .van-swipe-item {
      img {
        width: 100%;
        height: 100%;
        border-radius: 0.2rem;
      }
    }
  }
  .van-swipe__indicators {
    .van-swipe__indicator--active {
      background-color: rgb(219, 130, 130);
    }
  }
}
</style>