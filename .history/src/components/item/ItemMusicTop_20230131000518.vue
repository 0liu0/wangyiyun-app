<template>
  <div class="itemmusictop">
    <div class="top">
      <!-- 顶部左侧 -->
      <div class="topleft">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zuo"></use>
        </svg>
        <span>歌单</span>
      </div>
      <!-- 顶部右侧 -->
      <div class="topright">
                <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zuo"></use>
        </svg>
        <span>歌单</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemMusic",
  props: ["myinfo"],
  setup(props) {
    return { props };
  },
};
</script>

<style lang="less" scoped>
</style>