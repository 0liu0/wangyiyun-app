<template>
  <div class="home">
    <top-nav />
    <swiper-top />
    <IconList />
  </div>
</template>

<script>
import TopNav from "@/components/home/TopNav.vue";
import SwiperTop from "@/components/home/SwiperTop.vue";
import IconList from "@/components/home/IconList.vue";
export default {
  name: "HomeView",
  components: { TopNav, SwiperTop, IconList },
};
</script>

<style lang="less" scoped>
.home {
  padding: 0.1rem;
}
</style>
