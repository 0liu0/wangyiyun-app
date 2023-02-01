import service from "..";

function getMusicitem(id){
    return service({
        method:'GET',
        url: `/playlist/detail?id={id}`
    })
}