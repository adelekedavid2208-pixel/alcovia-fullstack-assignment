import {
  tasks,
  sessions,
  processedEvents
} from "../db/store";

import {
  Operation,
  Task,
  FocusSession
} from "../types/models";

import { processReward } from "./processReward";

export function applyOperation(
  op: Operation
) {

  if (
    processedEvents.has(op.id)
  ) {
    return;
  }

  processedEvents.add(op.id);

  switch (op.entityType) {

    case "TASK": {
      const task = op.payload as Task;

      const existing =
        tasks.get(task.id);

      if (
        !existing ||
        task.version >
          existing.version
      ) {
        tasks.set(task.id, task);
      }

      break;
    }

    case "SESSION": {
      const session =
        op.payload as FocusSession;

      sessions.set(
        session.id,
        session
      );

      if (
        session.status ===
        "SUCCESS"
      ) {
        processReward(
          session.id,
          session.targetMinutes
        );
      }

      break;
    }
  }
}