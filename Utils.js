import express from "express";
import { log } from "./CommonResponse.js";
import { pool } from './database_connection_MSSQL.js'


export async function callSP_Get(sp, params, req){
    
    return new Promise( async(res, rej) => {
        const request = pool.request()        
        log(req.query)
        log(req.body)
        for(let i = 0; i<params.length; i++){
            request.input(params[i], req.query[`${params[i]}`]);
        }
        try{
            const result = await request.execute(`${sp}`); 
            // log(result);
            res(result.recordsets[0]);
        }
        catch(error){
            log(error);
            rej(errorHandling(error));
        }
    })
}

export async function callSP_Post(sp, params, req){
    
    return new Promise( async(res, rej) => {
        const request = pool.request()
        log(req.query)
        log(req.body)
        for(let i = 0; i<params.length; i++){
            request.input(params[i], req.body[`${params[i]}`]);
        }
        try{
            const result = await request.execute(`${sp}`);       
            res(result.recordsets[0]);
        }
        catch(error){
            log(error);
            rej(errorHandling(error));
        }
    })
}