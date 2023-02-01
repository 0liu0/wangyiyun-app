import service from "..";

export function getMusicitem(id){
    return service({
        method:'GET',
        url: `/playlist/detail?id=${id}`
    })
}

export function getMusicitem(id){
    return service({
        method:'GET',
        url: `/playlist/detail?id=${id}`
    })
}