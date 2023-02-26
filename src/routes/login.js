import { Router } from "express";
import { handleLogin } from "../controllers/login";

const router = new Router();

router.post("/login", handleLogin);

export default router;
