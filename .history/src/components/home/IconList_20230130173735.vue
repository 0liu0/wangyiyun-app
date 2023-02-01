<template>
  <div class="iconlist">
    <div class="iconitem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-tuijian"></use>
      </svg>
      <p>每日推荐</p>
    </div>
    <div class="iconitem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-zhibo"></use>
      </svg>
      <p>私人FM</p>
    </div>
    <div class="iconitem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-gedan"></use>
      </svg>
      <p>歌单</p>
    </div>
    <div class="iconitem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-paihangbang"></use>
      </svg>
      <p>排行榜</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "IconList",
};
</script>

<style lang="less" scoped>
    .iconlist {
        width: 100%;
        height: 2rem;
        display: flex;
        justify-content: ;
        .iconitem {
            width: 25%;
        }
    }
</style>