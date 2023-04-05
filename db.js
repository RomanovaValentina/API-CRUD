import pkg from 'pg';

const { Pool } = pkg;
const pool = new Pool({
    user: "postgres",
    password: "root",
    host: "localhost",
    port: 5432,
    database:"node_postgres"

})  

export default pool;