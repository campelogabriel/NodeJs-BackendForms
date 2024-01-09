import { Request, Response } from "express";

interface IParams {
  id: string;
}
export const DeleteById = async (req: Request<IParams>, res: Response) => {
  console.log(req.params.id);

  res.status(204).json({
    status: "success",
    data: null,
  });
};
