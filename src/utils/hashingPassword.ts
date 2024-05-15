import bcrypt, { hash } from "bcrypt";

const hashPassword = async (params: any, next: any) => {
  if (params.action === "create" || params.action === "update") {
    const { password } = params.args.data;
    if (password) {
      params.args.data.password = await bcrypt.hash(password, 12);
    }
  }
  return next(params);
};

export default hashPassword