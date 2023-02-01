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
        url: `/playlist/track/all?id=24381616&limit=10&offset=1`
    })
}