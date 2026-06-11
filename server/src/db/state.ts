export const state = {
  student: {
    id: "student-1",
    coins: 0,
    streak: 0,
    focusMinutesToday: 0,
  },

  tasks: {},

  sessions: {},

  processedOperations: new Set<string>(),

  processedSessionRewards: new Set<string>(),
};