import { Router } from "express";
import {
  getTaskById,
  createTask,
  updateTaskStatus,
  getUserTasks,
} from "../controllers/taskController";

const router = Router();

router.get("/", getTaskById);
router.patch("/:taskId/status", updateTaskStatus);
router.post("/", createTask);
router.get("/user/:userId", getUserTasks);

export default router;
