<template>
  <div class="itemmusictop">
    <div class="top">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-zuojiantou"></use>
      </svg>
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