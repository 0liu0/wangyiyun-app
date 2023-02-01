import service from "..";

// 轮播图的
export function getBanners() {
    return service({
        method:'Get',
        url:'/banner?type=2'
    })
}