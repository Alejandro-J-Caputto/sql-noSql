"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
// import { deleteUser, getUser, getUsers, postUser, putUser } from '../controllers/userController';
const router = express_1.Router();
// router.route('/')
//   .get(getUsers)
//   .post(postUser)
// router.route('/:id')
//   .get(getUsers)
//   .delete(deleteUser)
//   .put(putUser)
router.get('/', [], userController_1.getUsers);
// router.post('/',      [],   postUser)
// router.get('/:id',    [],   getUser)
// router.put('/:id',    [],   putUser)
// router.delete('/:id', [],   deleteUser)
exports.default = router;
//# sourceMappingURL=userRoutes.js.map