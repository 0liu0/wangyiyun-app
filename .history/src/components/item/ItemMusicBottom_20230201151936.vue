<template>
  <div class="itemMusicBottom">
    <!-- 头部 -->
    <div class="top">
      <div class="left">
        <svg class="icon" style="fill: #000" aria-hidden="true">
          <use xlink:href="#icon-bofang1"></use>
        </svg>
        <div>
          <span style="font-size: 16px; font-weight: 700">播放全部</span>
          <span style="font-size: 12px; color: #333; font-weight: 500"
            >(共{{ musicList.length }}首)</span
          >
        </div>
      </div>
      <div class="right">
        <div class="collect">
          <span>收藏</span>
          <span>(</span>
          <span>{{ subscribedCount }}</span>
          <span>)</span>
        </div>
      </div>
    </div>
    <!-- 内容 -->
    <div class="content">
      <!-- 内容左侧部分 -->
      <div class="item">
        <div class="itemLeft">
            <span>1</span>
            <div class="musicMsg">
                <div class="author">
                    
                </div>
            </div>

        </div>
      <!-- 内容右侧部分 -->
        <div class="itemRight">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemMusicBottom",
  props: ["musicList", "subscribedCount"],
  setup(props) {},
};
</script>

<style lang="less" scoped>
.itemMusicBottom {
  padding: 0.24rem;
  margin-top: -0.55rem;
  background-color: #fff;
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
  .top {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      display: flex;
      align-items: flex-end;
      .icon {
        margin-right: 8px;
      }
    }
    .right {
      padding: 9px 5px;
      border-radius: 20px;
      background-color: red;
      color: #fff;
    }
  }
  .content {
    .item {

    }
  }
}
</style>