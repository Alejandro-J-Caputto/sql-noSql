"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbNoSql = exports.dbMysql = void 0;
const mysql_1 = __importDefault(require("mysql"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config({ path: './src/settings/.env' });
exports.dbMysql = mysql_1.default.createConnection({
    host: 'localhost',
    user: 'root',
    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
    port: 8889,
    password: process.env.passDB,
    database: 'concesionario',
});
const dbNoSql = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(process.env.DATABASE_LOCAL, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        });
        console.log(`Database online en ${process.env.PORT_NOSQL}`);
    }
    catch (err) {
        console.log(err);
        throw new Error('Error connecting to the database');
    }
});
exports.dbNoSql = dbNoSql;
//# sourceMappingURL=connectionDB.js.map