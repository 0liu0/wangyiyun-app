import service from "..";

// lun
export function getBanners() {
    return service({
        method:'Get',
        url:'/banner?type=2'
    })
}