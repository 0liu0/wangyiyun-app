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
        <img :src="myinfo.coverImgUrl" />
      </div>

      <div class="centerright">
        <p>{{ myinfo.name }}</p>
        <img
          :src="myinfo.coverImgUrl"
          style="width: 30px; height: 30px; border-radius: 15px"
        />
        <!-- <span>{{ myinfo.creator.nickname }}</span> -->
        <p>{{ myinfo.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemMusic",
  props: ["myinfo"],
  setup(props) {
    
},
};
</script>

<style lang="less" scoped>
.itemmusictop {
  padding: 10px;
  .top {
    width: 100%;
    height: 0.7rem;
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
        font-size: 0.4rem;
        font-weight: 600;
        // color: white;
      }
      .icon {
        // fill: white;
      }
    }
  }

  .center {
    margin-top: 0.3rem;
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