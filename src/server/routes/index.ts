import { Router } from "express";
import { userController } from "../controllers/index.js";

const router = Router();

router.post("/users", userController.Create);
router.get("users/:id", userController.GetById);
router.delete("users/:id", userController.DeleteById);

export default router;
