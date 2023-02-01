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
    <!-- 中部 -->
    <div class="center">
      <div class="centerleft">
        <img :src="props.myinfo.coverImgUrl">
      </div>

      <div class="centerright">
        <p>{{props.myinfo.name}}</p>
        <img src="props.myinfo.identityIconUrl">
        <p></p>
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
    height: .7rem;
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
        // color: white;
      }
      .icon {
        // fill: white;
      }
    }
  }

  .center {
    margin-top: .3rem;
    .centerleft {
      border-radius: 10px;
      // overflow: hidden;
      img {
        width: 140px;
        height: 140px;
        border-radius: 16px;
      }
    }
  }
}
</style>