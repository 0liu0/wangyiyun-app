<template>
  <h1>欢迎光临！！！</h1>
</template>

<script>
// import {  } from 'vue'  
import {useRoute} from 'vue-router'  
export default {
    name:'MusicItem',
    setup(){
      let query = useRoute().query
      console.log(());
    }
}
</script>

<style>

</style>