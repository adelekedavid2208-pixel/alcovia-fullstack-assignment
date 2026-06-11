export interface Task {
  id: string;
  title: string;
  status: "NOT_STARTED" | "IN_PROGRESS" | "DONE";
  version: number;
}

export interface FocusSession {
  id: string;
  targetMinutes: number;
  status: "RUNNING" | "SUCCESS" | "FAILED";
  failReason?: "give_up" | "app_switch";
}

export interface Operation {
  id: string;
  entityType: "TASK" | "SESSION";
  entityId: string;
  payload: any;
}