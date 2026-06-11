import {
  student,
  rewardedSessions
} from "../db/store";

export function processReward(
  sessionId: string,
  minutes: number
) {
  if (
    rewardedSessions.has(
      sessionId
    )
  ) {
    return false;
  }

  rewardedSessions.add(
    sessionId
  );

  student.coins += 50;
  student.streak += 1;
  student.todayFocusMinutes += minutes;

  return true;
}