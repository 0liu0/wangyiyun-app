<template>
  <div class="musiclist">
    <div class="musictop">
      <div class="topleft">发现好歌单</div>
      <div class="topright">查看更多</div>
    </div>
  </div>
</template>

<script>
import { reactive,toRefs,onMounted } from 'vue'
import {getSongList} from '@/request/api/home'
export default {
    name:'MusicList',
    setup(){
        let obj = reactive({
            songList:[]
        })

        // 挂载时加载数据
        onMounted(()=>{
            obj.songList = getSongList()
            console.log(obj.songList);
        })

        return {...toRefs(obj)}
    }
};
</script>

<style lang="less" scoped>
    .musictop {
        display: flex;
        padding: 0 .2rem;
        justify-content: space-between;
        align-items: center;
        .topleft {
            font-weight: 900;
            font-size: .32rem;
        }
        .topright {
            padding: 3px;
            border: 1px solid black;
            border-radius: 12px;
            font-size: .2rem;
        }
    }
</style>