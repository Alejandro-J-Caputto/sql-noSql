import mysql from 'mysql';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config({path: './src/settings/.env'});


export const dbMysql = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
  port: 8889,
  password: process.env.passDB,
  database: 'concesionario',
})

export const dbNoSql =  async () => {
  try {
    await mongoose.connect(process.env.DATABASE_LOCAL!, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
    console.log(`Database online en ${process.env.PORT_NOSQL}`)
  } catch(err){
    console.log(err)
    throw new Error('Error connecting to the database');
  }
}
  




