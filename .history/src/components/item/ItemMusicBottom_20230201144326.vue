<template>
  <div class="itemMusicBottom">
    <div class="top">
      <div class="left">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-bofang1"></use>
        </svg>
        <span>播放全部</span>
        <span>共999首</span>
      </div>
      <div class="right">
        <div class="collect">
            <span>+ 收藏</span>
            <span>(</span>
            <span>num</span>
            <span>)</span>
        </div>
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
.itemMusicBottom {
    padding: ;
    .top{
        display: flex;
        justify-content: space-between;
        align-items: center;

    }
}
</style>