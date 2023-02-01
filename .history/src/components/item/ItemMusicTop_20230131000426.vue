<template>
  <div class="itemmusictop">
    <div class="top">
      <div class="topleft">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zuo"></use>
        </svg>
        <span></span>
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
</style>