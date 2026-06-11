import { View, Button, Text } from "react-native";
import { useState } from "react";

import {
  createFakeTaskOperation,
} from "./src/storage/testData";

import {
  syncNow,
} from "./src/sync/syncService";

import {
  sampleTask,
} from "./src/storage/tasks";

import {
  updateTaskStatus,
} from "./src/storage/taskOperations";

import {
  completeFocusSession,
} from "./src/storage/sessionOperations";

export default function App() {
  const [count, setCount] =
    useState(0);

  const [taskStatus, setTaskStatus] =
    useState(sampleTask.status);

  function nextStatus(
    current: string
  ) {
    if (
      current ===
      "NOT_STARTED"
    ) {
      return "IN_PROGRESS";
    }

    if (
      current ===
      "IN_PROGRESS"
    ) {
      return "DONE";
    }

    return "NOT_STARTED";
  }

  async function createOp() {
    await createFakeTaskOperation();

    setCount(
      current => current + 1
    );
  }

  async function doSync() {
    await syncNow();
  }

  async function changeTaskStatus() {
    const next =
      nextStatus(
        taskStatus
      );

    const nextVersion =
      count + 1;

    await updateTaskStatus(
      sampleTask.id,
      next,
      nextVersion
    );

    setTaskStatus(
      next
    );

    setCount(
      current =>
        current + 1
    );
  }

  async function completeSession() {
    await completeFocusSession(
      25
    );

    setCount(
      current =>
        current + 1
    );
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
        }}
      >
        Alcovia Assignment
      </Text>

      <Text>
        Offline Operations: {count}
      </Text>

      <Text>
        Task: {sampleTask.title}
      </Text>

      <Text>
        Task Status: {taskStatus}
      </Text>

      <Button
        title="Create Offline Operation"
        onPress={createOp}
      />

      <Button
        title="Change Task Status"
        onPress={changeTaskStatus}
      />

      <Button
        title="Complete 25 Min Session"
        onPress={completeSession}
      />

      <Button
        title="Sync To Server"
        onPress={doSync}
      />
    </View>
  );
}