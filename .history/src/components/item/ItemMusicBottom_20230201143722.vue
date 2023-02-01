<template>
  <div class="itemMusicBottom">
    <div class="top">
      <div class="left">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-bofang1"></use>
        </svg>
        <span>播放全部</span>
        <span>{{999首歌}})</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemMusicBottom",
  props: ["musicList"],
  setup(props) {},
};
</script>

<style lang="less" scoped>
</style>