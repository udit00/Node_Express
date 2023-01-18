
function missingSP(spname){
    return {
        "status": -1,
        "message": `Could not find Stored Procedure ${spname}`
    }
}


export function log(printable){
    console.log(printable);
}

export const errorMap = [{
    "key": 2812,
    "value": 'Incorrect Stored Procedure '
},{
    "key": 201,
    "value": `Stored Procedure expects some extra parameter which was not provided.`
},{
    "key": 8146,
    "value": `Stored Procedure was given extra parameter which wasn't required.`
}
]

