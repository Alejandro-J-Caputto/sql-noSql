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
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const connectionDB_1 = require("../databases/connectionDB");
const userRoutes_1 = __importDefault(require("../routers/userRoutes"));
class Server {
    constructor() {
        this.apiEndpoint = {
            users: '/api/ts/v1/users'
        };
        this.app = express_1.default();
        this.port = process.env.PORT || '8000';
        this.connectToDatabaseMySql();
        this.connectionNoSql();
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.static('./src/public'));
    }
    routes() {
        this.app.use(this.apiEndpoint.users, userRoutes_1.default);
    }
    connectToDatabaseMySql() {
        connectionDB_1.dbMysql.connect((err) => {
            if (err)
                throw err;
            console.log('Connected');
        });
    }
    connectionNoSql() {
        return __awaiter(this, void 0, void 0, function* () {
            yield connectionDB_1.dbNoSql();
        });
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Server running on port ' + this.port);
        });
    }
}
exports.Server = Server;
exports.default = Server;
//# sourceMappingURL=server.js.map