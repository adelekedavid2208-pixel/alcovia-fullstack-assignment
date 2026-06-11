import {
  Task,
  Subject,
  Chapter,
  FocusSession,
  StudentState
} from "../types/models";

export const tasks = new Map<string, Task>();

export const chapters = new Map<string, Chapter>();

export const subjects = new Map<string, Subject>();

export const sessions = new Map<string, FocusSession>();

export const processedEvents =
  new Set<string>();

export const rewardedSessions =
  new Set<string>();

export const student: StudentState = {
  studentId: "student-1",
  streak: 0,
  coins: 0,
  todayFocusMinutes: 0
};