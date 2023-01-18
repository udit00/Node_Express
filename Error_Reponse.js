import { errorMap } from "./CommonResponse.js";

let COMMON_ERR_RESPONSE = {
    "status": -1,
    "message": ``
}

export function errorHandling(error){
    let err;
    let resp = COMMON_ERR_RESPONSE

    errorMap.forEach((item)=> {
        if(item.key == error.originalError.code){
            err = item;
        }
    })
    if(error.key == 2812){
        err.value += `${error.procName}`
    }

    resp.message = err.value    

    return resp;
}

