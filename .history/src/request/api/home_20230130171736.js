import service from "..";

export function getBanners() {
    return service({
        method:'Get',
        url:'/banner?type=2',
    })
}