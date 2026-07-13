import type { ChatConnectionStatus, ChatMessage } from './types';

const WS_URL = 'wss://ws.ifelse.io';

export class ChatConnection {
  private socket: WebSocket | null = null;

  connect(
    onMessage: (message: ChatMessage) => void,
    onStatusChange?: (status: ChatConnectionStatus) => void,
  ) {
    if (this.socket) return;

    this.socket = new WebSocket(WS_URL);

    this.socket.onopen = () => {
      onStatusChange?.('connected');
    };

    this.socket.onclose = () => {
      onStatusChange?.('disconnected');
    };

    this.socket.onerror = () => {
      onStatusChange?.('disconnected');
    };

    this.socket.onmessage = (event) => {
      const text = String(event.data);

      if (text.startsWith('Request served by')) {
        return;
      }

      onMessage({
        id: crypto.randomUUID(),
        role: 'assistant',
        content: text,
        createdAt: new Date(),
      });
    };
  }

  send(message: string) {
    if (!this.socket) return;
    if (this.socket.readyState !== WebSocket.OPEN) return;

    this.socket.send(message);
  }

  disconnect() {
    if (!this.socket) return;

    this.socket.onopen = null;
    this.socket.onmessage = null;
    this.socket.onclose = null;
    this.socket.onerror = null;

    if (
      this.socket.readyState === WebSocket.OPEN ||
      this.socket.readyState === WebSocket.CONNECTING
    ) {
      this.socket.close();
    }

    this.socket = null;
  }
}
