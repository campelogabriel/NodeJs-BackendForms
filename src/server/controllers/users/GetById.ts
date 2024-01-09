import { Request, Response } from "express";

interface IParams {
  id: string;
}

export const GetById = async (req: Request<IParams>, res: Response) => {
  console.log(req.params.id);

  res.status(200).json({
    status: "success",
  });
};
