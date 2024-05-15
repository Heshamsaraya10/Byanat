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
exports.updateUser = exports.getAllUsers = exports.getUser = exports.createUser = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("../Entities/User");
const api_Error_1 = __importDefault(require("../utils/api-Error"));
// async function hashPasswordBeforeInsert(entity: User) {
//   entity.password = await hashPassword(entity.password);
// }
// @desc    Create user
// @route   POST /api/v1/users
// @access  private/Admin
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    const userRepository = (0, typeorm_1.getRepository)(User_1.User);
    const newUser = new User_1.User();
    newUser.name = name;
    newUser.email = email;
    newUser.password = password;
    const createdUser = yield userRepository.save(newUser);
    if (!User_1.User)
        return next(new api_Error_1.default("User is not exist or Invalid ID.", 404));
    res.status(201).json({ status: "Success", data: createdUser });
});
exports.createUser = createUser;
// @desc    Get user
// @route   Get/api/v1/user
// @access  private/Admin
const getUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = +req.params.id;
    const userRepository = (0, typeorm_1.getRepository)(User_1.User);
    const user = yield userRepository.findOne({ where: { id: userId } });
    if (!user)
        return next(new api_Error_1.default("User is not exist or Invalid ID.", 404));
    res.status(200).json({ status: "Success", data: user });
});
exports.getUser = getUser;
// @desc    Get users
// @route   Get/api/v1/users
// @access  private/Admin
const getAllUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.query;
    const page = Number(query.page) || 1;
    const limit = Number(query.limit) || 10;
    const skip = (page - 1) * limit;
    const userRepository = (0, typeorm_1.getRepository)(User_1.User);
    const allUsers = yield userRepository.find({
        skip: skip,
        take: limit,
    });
    if (!User_1.User)
        return next(new api_Error_1.default("User is not exist or Invalid ID.", 404));
    res.status(200).json({ status: "Success", data: allUsers });
});
exports.getAllUsers = getAllUsers;
// @desc    Update specific user
// @route   PUT /api/v1/users/:id
// @access  Private/admin
const updateUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () { });
exports.updateUser = updateUser;
