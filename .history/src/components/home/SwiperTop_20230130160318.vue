<template>
  <van-button type="primary">主要按钮</van-button>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item>1</van-swipe-item>
  <van-swipe-item>2</van-swipe-item>
  <van-swipe-item>3</van-swipe-item>
  <van-swipe-item>4</van-swipe-item>
</van-swipe>
</template>

<script>
export default {
    name:'SwiperTop'
}
</script>

<style>

</style>