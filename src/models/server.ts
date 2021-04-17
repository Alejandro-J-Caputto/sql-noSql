import express, {Application} from 'express';
import cors from 'cors';
import {dbMysql, dbNoSql} from '../databases/connectionDB'
import userRouter from '../routers/userRoutes'


export class Server {

  private app: Application;
  private port: string | number;
  private apiEndpoint: {
    users: string
  } = {
    users: '/api/ts/v1/users'
  }


  constructor() {
    this.app = express();
    this.port = process.env.PORT || '8000';
    this.connectToDatabaseMySql();
    this.connectionNoSql();
    this.middlewares();
    this.routes();
  }


  middlewares() {
    this.app.use(cors());
    this.app.use(express.json())
    this.app.use(express.static('./src/public'))
  }
  routes() {
    this.app.use(this.apiEndpoint.users, userRouter)
  }

  connectToDatabaseMySql () {

    dbMysql.connect((err)=> {
     if(err) throw err;
     console.log('Connected')
   });
 }

 async connectionNoSql() {
    await dbNoSql()
 }

 listen() {
   this.app.listen(this.port, () => {
     console.log('Server running on port ' + this.port)
   })
 }
}

export default Server;