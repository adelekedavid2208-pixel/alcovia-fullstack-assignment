# Alcovia Full Stack Engineering Assignment

## Overview

This project implements an offline-first study application with:

- Focus Sessions
- Syllabus Progress Tracking
- Synchronization across devices
- Idempotent rewards
- n8n automation

## Tech Stack

- React Native (Expo)
- TypeScript
- Express
- n8n

## Running the Client

```bash
cd client
npm install
npm run web
```

## Running the Server

```bash
cd server
npm install
npx tsx src/index.ts
```

## Sync Model

Client actions are stored in a local operation queue.

When connectivity returns, queued operations are sent to the backend through the `/sync` endpoint.

## Conflict Resolution

Tasks use version numbers.

If conflicting task updates exist, the task with the highest version wins.

## Reward Idempotency

Each focus session has a unique session ID.

The backend keeps track of rewarded sessions and prevents duplicate rewards.

## State Endpoint

Current server state can be viewed at:

http://localhost:4000/state

## n8n Workflow

Import `n8n-workflow.json` into n8n.

The workflow receives successful focus session events and processes notifications.
