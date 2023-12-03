import  express  from "express";
const router=express.Router();
import { getPosts, createPost } from "../controllers/posts.js";

router.get('/', getPosts)
router.get('/', createPost)

export default router;