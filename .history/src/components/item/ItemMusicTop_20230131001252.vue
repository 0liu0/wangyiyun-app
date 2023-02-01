<template>
  <div class="itemmusictop">
    <div class="top">
      <!-- 顶部左侧 -->
      <div class="topleft">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zuojiantou"></use>
        </svg>
        <span>歌单</span>
      </div>
      <!-- 顶部右侧 -->
      <div class="topright">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-sousuo"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-liebiao"></use>
        </svg>
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
.itemmusictop {
  padding: 10px;
  .top {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .topleft,
    .topright {
      width: 25%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      span {
        font-size: .4rem;
        font-weight: 600;
      }
      
    }
  }
}
</style>