import service from "..";

// lun'bo'p
export function getBanners() {
    return service({
        method:'Get',
        url:'/banner?type=2'
    })
}