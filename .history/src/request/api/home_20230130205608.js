import service from "..";

// 轮播图的后台数据
export function getBanners() {
    return service({
        method:'Get',
        url:'/banner?type=2'
    })
}
// 得到每日推荐歌单
export function getSongList() {
    return service({
        method:'GET',
        url:''
    })
}