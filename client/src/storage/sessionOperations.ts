import { v4 as uuid } from "uuid";

import {
  addOperation
} from "./operationQueue";

export async function
completeFocusSession(
  minutes: number
) {
  const sessionId =
    uuid();

  await addOperation({
    id: uuid(),

    deviceId:
      "device-a",

    entityType:
      "SESSION",

    entityId:
      sessionId,

    action:
      "COMPLETE_SESSION",

    version: 1,

    payload: {
      id: sessionId,

      deviceId:
        "device-a",

      targetMinutes:
        minutes,

      startedAt:
        Date.now(),

      completedAt:
        Date.now(),

      status:
        "SUCCESS",
    },
  });

  console.log(
    "Session queued"
  );
}