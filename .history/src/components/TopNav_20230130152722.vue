<template>
  <!-- 头部 -->
  <div class="topnav">
    <!-- 左侧的内容 -->
    <div class="topleft">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-danlieliebiao"></use>
      </svg>
    </div>
    <!-- 中间部分 -->
    <div class="topcenter">
      <span>我的</span>
      <span>发现</span>
      <span>云村</span>
      <span>视频</span>
    </div>
    <!-- 右侧的内容 -->
    <div class="topright">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-sousuo"></use>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopNav",
};
</script>

<style scoped lang="less">
    .topnav {
        display: flex;
        ju
    }
</style>