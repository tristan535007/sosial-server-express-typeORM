import { Router } from "express";
import userController from "../user/controller/userController";
const router = Router();

router.post("/registration", userController.reg);
router.post("/login", userController.login);
router.get("/auth", userController.check);

export default router;
