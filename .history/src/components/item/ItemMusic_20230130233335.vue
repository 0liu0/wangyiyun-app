<template>
  <h1>{{props.myinfo}}</h1>
</template>

<script>
export default {
    name:'ItemMusic',
    props:['myinfo'],
    setup(props) {
      console.log('@',props);
      console.log('@',props);
      console.log('@',props.value.myinfo);
      console.log('@',myinfo);
    }

}
</script>

<style>

</style>