import sql from "mssql";

import dotenv from "dotenv";
dotenv.config({ path: "../.env" });
const DB_URL: string | undefined = process.env.DB_URL;
const PASSWORD: string | undefined = process.env.PASSWORD;
console.log(DB_URL);

// Replace the placeholder values with your actual AWS RDS credentials
const config: any = {
  server: DB_URL, // LocalDB instance name
  database: "MarineStoreDB", // Your database name
  user: "don", // Your SQL Server username
  password: PASSWORD, // Your SQL Server password
  options: {
    trustedConnection: true, // Use Windows Authentication
    // encrypt: true, // Use encryption for secure connections
    trustServerCertificate: true, // Bypass SSL certificate validation
    enablename: "SQLEXPRESS",
    enableArithAbort: true,
  },
  port: 1433,
};

export const connect = () => sql.connect(config);
export { sql };
