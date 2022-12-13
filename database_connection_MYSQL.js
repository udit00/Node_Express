import mysql from 'mysql2';


const pool = mysql.createPool({
    host: '127.0.0.1',
    database: 'udit_gym',
    user: 'root',
    password: 'Foodpanda@123*'
}).promise();

export async function getAllUsers(){
    const [result] = await pool.query('select * from usermast');
    return result;
}

export async function getUser(id){
    const [result] = await pool.query(`
    select * from usermast
    where userid=?
    `,[id]);
    return result[0];
}

export async function addUser(username, password){
    const [result] = await pool.query(`
    INSERT INTO usermast (username, password)
    VALUES 
    (?,?)
    `,[username, password]);
    const userid = result.insertId;
    return getUser(userid);
}

export async function deleteUser(userid){
    const [result] = await pool.query(`
    DELETE FROM udit_gym 
    WHERE userid=?
    `,[userid]);
    return result;
}

export async function validateUser(username, password){
    const [result]=await pool.query(`CALL validate_login(?,?)`,[username, password]);
    return result;
}