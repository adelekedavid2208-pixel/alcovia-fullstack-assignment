import AsyncStorage from "@react-native-async-storage/async-storage";
import { Operation } from "../types/models";

const KEY = "operation_queue";

export async function getQueue(): Promise<Operation[]> {
  const raw = await AsyncStorage.getItem(KEY);

  return raw ? JSON.parse(raw) : [];
}

export async function addOperation(op: Operation) {
  const queue = await getQueue();

  queue.push(op);

  await AsyncStorage.setItem(
    KEY,
    JSON.stringify(queue)
  );
}

export async function clearQueue() {
  await AsyncStorage.removeItem(KEY);
}