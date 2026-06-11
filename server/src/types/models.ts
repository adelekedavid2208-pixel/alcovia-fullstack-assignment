export type TaskStatus =
  | "NOT_STARTED"
  | "IN_PROGRESS"
  | "DONE";

export interface Task {
  id: string;
  chapterId: string;
  title: string;
  status: TaskStatus;

  version: number;
  deleted?: boolean;
}

export interface Chapter {
  id: string;
  subjectId: string;
  title: string;
  taskIds: string[];
}

export interface Subject {
  id: string;
  title: string;
  chapterIds: string[];
}

export interface FocusSession {
  id: string;
  deviceId: string;

  targetMinutes: number;

  startedAt: number;
  completedAt?: number;

  status:
    | "RUNNING"
    | "SUCCESS"
    | "FAILED";

  failReason?:
    | "give_up"
    | "app_switch";
}

export interface StudentState {
  studentId: string;

  streak: number;
  coins: number;

  todayFocusMinutes: number;
}

export interface Operation {
  id: string;

  deviceId: string;

  entityType:
    | "TASK"
    | "SESSION";

  entityId: string;

  action: string;

  payload: any;

  version: number;
}