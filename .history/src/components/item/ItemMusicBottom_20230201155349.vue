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
      <div class="item" v-for="(obj, index) in musicList" :key="index">
        <!-- 内容左侧部分 -->
        <div class="itemLeft">
          <div class="number">{{ index + 1 }}</div>
          <div class="musicMsg">
            <p class="prod">{{ obj.name }}</p>
            <span class="authors" v-for="person in obj.ar" :key="person.id">
              {{ person.name }}
            </span>
          </div>
        </div>
        <!-- 内容右侧部分 -->
        <div class="itemRight">
          <svg class="icon" style="fill: #000" aria-hidden="true" v-if="obj.mv">
            <use xlink:href="#icon-shipin"></use>
          </svg>
          <svg
            class="icon"
            style="fill: #000; margin-left: 15px"
            aria-hidden="true"
          >
            <use xlink:href="#icon-danlieliebiao"></use>
          </svg>
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
  position: sticky;
  .top {
    width: 100%;
    display: flex;
    // position: -ms-page;
    justify-content: space-between;
    align-items: center;
    .left {
      display: flex;
      align-items: flex-end;
      .icon {
        margin-right: 8px;
      }
      .number {
        text-align: 1.5rem;
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
      display: flex;
      width: 100%;
      height: 1.5rem;
      justify-content: space-between;
      align-items: center;
      .itemLeft {
        display: flex;
        align-items: center;
        .number {
          margin-right: 10px;
            color: darkgrey;
        }
        .musicMsg {
            .prod {
                font-weight: 900;
                margin-bottom: 8px;
            }
            .authors {
                font-size: 12px;
                color: darkgray;
                font-weight: 700;
            }
        }
      }
      .itemRight {
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>