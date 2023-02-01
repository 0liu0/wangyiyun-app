<template>
  <h1>你好</h1>
</template>

<script>
export default {
    name:'ItemMusic',
    props:['myinfo'],
    setup(props) {
      console.log('@',props);
      console.log('@',props);
      console.log('@',propmyinfo);
      console.log('@',myinfo);
    }

}
</script>

<style>

</style>