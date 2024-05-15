import { Request, Response, NextFunction } from "express";
import { Repository, getRepository } from "typeorm";
import { User } from "../Entities/User";
import hashPassword from "../utils/hashingPassword";
import APIError from "../utils/api-Error";

// async function hashPasswordBeforeInsert(entity: User) {
//   entity.password = await hashPassword(entity.password);
// }

// @desc    Create user
// @route   POST /api/v1/users
// @access  private/Admin
export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, email, password } = req.body;
  const userRepository = getRepository(User);

  const newUser = new User();
  newUser.name = name;
  newUser.email = email;
  newUser.password = password;

  const createdUser = await userRepository.save(newUser);

  if (!User) return next(new APIError("User is not exist or Invalid ID.", 404));
  res.status(201).json({ status: "Success", data: createdUser });
};

// @desc    Get user
// @route   Get/api/v1/user
// @access  private/Admin
export const getUser = async (
  req: Request,
  res: Response<{ status: string; data: User | null }>,
  next: NextFunction
) => {
  const userId = +req.params.id;
  const userRepository: Repository<User> = getRepository(User);

  const user = await userRepository.findOne({ where: { id: userId } });

  if (!user) return next(new APIError("User is not exist or Invalid ID.", 404));
  res.status(200).json({ status: "Success", data: user });
};

// @desc    Get users
// @route   Get/api/v1/users
// @access  private/Admin
export const getAllUsers = async (
  req: Request,
  res: Response<{ status: string; data: User[] | null }>,
  next: NextFunction
) => {
  const query = req.query;
  const page = Number(query.page) || 1;
  const limit = Number(query.limit) || 10;
  const skip = (page - 1) * limit;

  const userRepository: Repository<User> = getRepository(User);

  const allUsers = await userRepository.find({
    skip: skip,
    take: limit,
  });
  if (!User) return next(new APIError("User is not exist or Invalid ID.", 404));
  res.status(200).json({ status: "Success", data: allUsers });
};

// @desc    Update specific user
// @route   PUT /api/v1/users/:id
// @access  Private/admin
export const updateUser = async (
  req: Request,
  res: Response<{ status: string; data: User[] | null }>,
  next: NextFunction
) => {};
