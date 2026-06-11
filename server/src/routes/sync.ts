import { Router } from "express";
import { applyOperation } from "../sync/applyOperation";
import { tasks, sessions, student } from "../db/store";

const router = Router();

router.post("/", (req, res) => {
  const operations = req.body.operations || [];

  for (const op of operations) {
    applyOperation(op);
  }

  res.json({
    success: true,
    state: {
      student,
      tasks: Array.from(tasks.values()),
      sessions: Array.from(sessions.values())
    }
  });
});

export default router;