import { v4 as uuid }
from "uuid";

import {
  addOperation
}
from "./operationQueue";

export async function
createFakeTaskOperation() {

  const taskId =
    "task-1";

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

    version: 1,

    payload: {
      id: taskId,

      chapterId:
        "chapter-1",

      title:
        "Math Revision",

      status:
        "DONE",

      version: 1,
    },
  });

  console.log(
    "Task operation added"
  );
}