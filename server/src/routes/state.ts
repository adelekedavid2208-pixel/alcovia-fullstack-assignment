import { Router } from "express";

import {
  student,
  tasks,
  sessions
} from "../db/store";

const router = Router();

router.get("/", (_, res) => {
  res.json({
    student,

    tasks: Array.from(
      tasks.values()
    ),

    sessions: Array.from(
      sessions.values()
    )
  });
});

export default router;