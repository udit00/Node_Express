import sql from 'mssql/msnodesqlv8.js'
var config = {
    user: 'DESKTOP-OJFJMQK\Administrator',
    password: '',
    database: 'udit_gym',
    server: 'DESKTOP-OJFJMQK\\',
    driver: 'msnodesqlv8',
    options: {
        trustedConnection: true
    },
    connectionTimeout: 150000,
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000,
    }
};
export var pool;
new sql.ConnectionPool(config)
    .connect()
    .then(p => {
        console.log('Connected to MSSQL')
        // const request = pool.request()
        //     .query(`select * from usermast`).then((result) => {
        //    console.log(result);
        // })
        pool = p;
    })
    .catch(err => console.log('Database Connection Failed! Bad Config: ', err))

