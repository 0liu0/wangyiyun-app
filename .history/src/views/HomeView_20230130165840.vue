<template>
  <div class="home">
    <top-nav/>
    <swiper-top/>
  </div>
</template>

<script>
import TopNav from '@/components/home/TopNav.vue'
import SwiperTop from '@/components/home/SwiperTop.vue'
export default {
  name: "HomeView",
  components:{TopNav,SwiperTop}
};
</script>

<style lang="less" scoped>
    .home {
      padding: .1rem;
    }
</style>
