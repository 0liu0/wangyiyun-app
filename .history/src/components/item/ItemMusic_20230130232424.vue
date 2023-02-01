<template>
  <h1>你好</h1>
</template>

<script>
export default {
    name:'ItemMusic',
    props:['info'],
    setup(props) {
      console.log('@',info);
    }

}
</script>

<style>

</style>