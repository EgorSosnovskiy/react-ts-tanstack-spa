# Help Chat Requirements

## User Story

As a fraud management operator,

I want to quickly contact support without leaving my current workflow.

---

## API

### WebSocket

Endpoint:

```text
wss://ws.ifelse.io
```

The server echoes every message back to the client.

---

## User Interface

The support chat is opened from the **Help** navigation item.

The chat is displayed as a modal dialog above the current page.

The previously opened page remains visible behind a blurred overlay.

---

## Acceptance Criteria

### AC-1

Clicking the **Help** navigation item opens the Support Chat dialog.

---

### AC-2

The dialog contains:

- chat header;
- connection status;
- message history;
- message input;
- send button.

---

### AC-3

When the dialog opens:

- a WebSocket connection is established automatically.

When the dialog closes:

- the active WebSocket connection is terminated.

---

### AC-4

The user can send messages.

Each sent message is immediately displayed in the conversation.

The WebSocket server echoes the same message back, and the echoed message is displayed as a support response.

---

### AC-5

The connection status is visible.

Possible states:

- Connecting;
- Connected;
- Disconnected;
- Error.

---

### AC-6

The following UI states are supported:

- empty conversation;
- connecting;
- connected;
- disconnected;
- connection error.

---

### AC-7

The chat dialog is built using reusable Shadcn UI components.

---

### AC-8

The chat dialog provides a responsive layout for desktop and mobile devices.

---

### AC-9

Closing the dialog returns focus to the previously opened page without changing the current navigation state.

### AC-10

The Send button is disabled when:

- the WebSocket connection is not established;
- the message input is empty.
