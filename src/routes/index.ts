import { Router } from "express";
import postRouter from "./postRouter";
import userRouter from "./userRouter";
const router = Router();

router.use("/user", userRouter);
router.use("/post", postRouter);

export default router;
