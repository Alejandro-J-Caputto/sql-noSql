import dotenv from 'dotenv';  
import Server from './models/server';
dotenv.config({path: 'src/settings/.env'});


const server = new Server();
server.listen()