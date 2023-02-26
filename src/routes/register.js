import { Router } from "express";
import { handleRegister } from "../controllers/register";

const router = new Router();

router.post("/register", handleRegister);

export default router;
