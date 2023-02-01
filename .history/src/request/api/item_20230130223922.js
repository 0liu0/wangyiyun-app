import service from "..";

function getMusicitem(id){
    return service({
        method:'GET'
    })
}