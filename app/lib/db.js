import sql from "mssql";

let pool = null;

const config = {
  server: process.env.DB_SERVER,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,              
  options: {
    instanceName: process.env.DB_INSTANCE,  
    encrypt: false,
    trustServerCertificate: true,
  },
  pool: { max: 5, min: 0, idleTimeoutMillis: 30000 },
};

export async function getConnection() {
  if (pool) return pool;
  ["server","user","password","database"].forEach((k)=>{
    if (!config[k] || typeof config[k] !== "string")
      throw new Error(`Config inválida: ${k} ausente ou não é string`);
  });
  pool = await sql.connect(config);
  return pool;
}
