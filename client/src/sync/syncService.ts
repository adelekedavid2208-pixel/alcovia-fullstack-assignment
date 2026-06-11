import { getQueue, clearQueue }
from "../storage/operationQueue";

const SERVER_URL =
  "http://localhost:4000";

export async function syncNow() {
  try {
    const operations =
      await getQueue();

    if (operations.length === 0) {
      console.log("Nothing to sync");
      return;
    }

    const response =
      await fetch(
        `${SERVER_URL}/sync`,
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            operations,
          }),
        }
      );

    const data =
      await response.json();

    console.log(
      "Sync successful:",
      data
    );

    await clearQueue();
  } catch (error) {
    console.log(
      "Sync failed:",
      error
    );
  }
}