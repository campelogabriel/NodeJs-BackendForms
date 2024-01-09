import { Request, Response } from "express";

interface IUser {
  name: string;
  isCompany: boolean;
  email: string;
  password: string;
  confirmPassword: string;
}

export const Create = async (req: Request<{}, {}, IUser>, res: Response) => {
  console.log(req.body.email);

  res.status(201).json({
    status: "success",
  });
};
