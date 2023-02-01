import service from "..";

export function getMusicitem(id){
    return service({
        method:'GET',
        url: `/playlist/detail?id=${id}`
    })
}

export function getSongs(id){
    return service({
        method:'GET',
        url: `/playlist/track/all?id=${id}&limit=10&offset=1`
    })
}