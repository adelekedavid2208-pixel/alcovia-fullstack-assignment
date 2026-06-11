import { v4 as uuid } from "uuid";

import {
  addOperation
} from "./operationQueue";

export async function
updateTaskStatus(
  taskId: string,
  status: string,
  version: number
) {
  await addOperation({
    id: uuid(),

    deviceId:
      "device-a",

    entityType:
      "TASK",

    entityId:
      taskId,

    action:
      "UPDATE_TASK",

    version,

    payload: {
      id: taskId,

      chapterId:
        "chapter-1",

      title:
        "Math Revision",

      status,

      version,
    },
  });

  console.log(
    "Task update queued"
  );
}