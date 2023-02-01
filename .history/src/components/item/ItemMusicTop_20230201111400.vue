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
      <!-- 中部左侧 -->
      <div class="centerleft">
        <img :src="myinfo.coverImgUrl" />
      </div>
      <!-- 中部右侧 -->
      <div class="centerright">
        <p>{{ myinfo.name }}</p>
        <div class="nickname">
          <img
            :src="myinfo.creator.avatarUrl"
            style="
              width: 30px;
              height: 30px;
              border-radius: 15px;
              margin-right: 8px;
            "
          />
          <span>{{ myinfo.creator.nickname }}</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xiangyoujiantou"></use>
          </svg>
        </div>
        <p style="">{{ myinfo.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemMusic",
  props: ["myinfo"],
  setup(props) {
    // 通过props进行传值，判断如果数据拿不到，就获取sessionStorage中的
    if ((props.myinfo.creator = "")) {
      props.myinfo.creator = JSON.parse(
        sessionStorage.getItem().itemmsg
      ).creator;
    }
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
    display: flex;
    .centerleft {
      border-radius: 10px;
      margin-right: 0.3rem;
      // overflow: hidden;
      img {
        width: 140px;
        height: 140px;
        border-radius: 16px;
      }
    }

    .centerright {
      height: 140px;
      overflow: hidden;
      .nickname {
        display: flex;
        align-items: center;
        margin-top: 0.2rem;
        margin-bottom: 0.3rem;
        font-size: 14px;
        color: rgb(122, 108, 108);
        .icon {
          fill: rgb(122, 108, 108);
          width: 12px;
          border: 5px;
          margin-right: -5px;
        }
      }
    }
  }
}
</style>