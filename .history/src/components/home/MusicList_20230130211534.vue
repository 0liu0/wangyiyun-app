<template>
  <div class="musiclist">
    <div class="musictop">
      <div class="topleft">发现好歌单</div>
      <div class="topright">查看更多</div>
    </div>
    <div class="musiccontent">
        <div class="list" v-for="l in obj.songList" :key="l.id">
            <img :src="l.picUrl">
            <div class="nums">
                {{l.23580188}}
            </div>
            {{l.name}}
        </div>
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
            songList:[],
        })

        // 挂载时加载数据
        onMounted(async ()=>{
            let List = await getSongList()
            obj.songList = List.data.result
            console.log(obj.songList);
        })

        return {obj}
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