import { Router } from "express";
import { classesRoutes } from "./classes.routes";
import { commentRoutes } from "./comments.routes";
import { userRoutes } from "./user.routes";



const router = Router();


router.use("/user", userRoutes);
router.use("/classes", classesRoutes);
router.use("/comments", commentRoutes);


export { router }