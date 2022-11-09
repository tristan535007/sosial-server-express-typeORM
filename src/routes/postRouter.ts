import { Router } from "express";
import postController from "../post/controller/postController";
const router = Router();

router.get("/allPosts", postController.getAllPosts);
router.post("/newPost", postController.createPost);
router.delete("/deletePost/:id", postController.deletePost);
router.patch("/updatePost/:id", postController.updatePost);

export default router;
