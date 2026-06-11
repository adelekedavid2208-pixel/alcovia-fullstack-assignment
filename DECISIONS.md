# DECISIONS

## Data Model

The client stores operations locally in an offline queue.

When the user performs an action offline, an operation is added to the queue.

When connectivity returns, queued operations are sent to the backend through the /sync endpoint.

---

## Conflict Resolution

Tasks contain a version field.

When conflicting task updates arrive, the server accepts the task with the highest version.

Example:

Device A:
Task v5 = DONE

Device B:
Task v4 = IN_PROGRESS

After sync:
Task v5 wins.

This guarantees that all devices eventually converge to the same state.

---

## Reward Idempotency

Each focus session has a unique sessionId.

The backend maintains a rewardedSessions set.

Before applying rewards, the backend checks whether the sessionId has already been rewarded.

If it has, the reward is skipped.

This guarantees that duplicate sync messages and replayed operations cannot award coins twice.

---

## Automation Idempotency

Successful session notifications use the sessionId as the deduplication key.

If the same session is replayed during sync, the notification is ignored because the session has already been processed.

This ensures notifications are sent exactly once.

---

## Convergence

All devices eventually receive the same server state.

Task conflicts are resolved through version comparison.

Session rewards are protected through idempotent processing.

Because all devices apply the same conflict-resolution rules, they converge to an identical state after synchronization.

---

## Tradeoff

I chose a simple version-based conflict resolution strategy.

This approach is easy to understand and implement, though it may discard some conflicting updates that could otherwise be merged.