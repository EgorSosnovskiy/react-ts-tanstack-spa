import { useEffect, useRef, useState } from 'react';

import { ChatConnection } from './chat-connection';
import type { ChatConnectionStatus, ChatMessage } from './types';

export function useChat() {
  const connection = useRef(new ChatConnection());

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [status, setStatus] = useState<ChatConnectionStatus>('connecting');

  useEffect(() => {
    const chatConnection = connection.current;

    chatConnection.connect((message) => {
      setMessages((prev) => [...prev, message]);
    }, setStatus);

    return () => {
      chatConnection.disconnect();
    };
  }, []);

  function sendMessage(content: string) {
    const message: ChatMessage = {
      id: crypto.randomUUID(),
      role: 'user',
      content,
      createdAt: new Date(),
    };

    setMessages((prev) => [...prev, message]);

    connection.current.send(content);
  }

  function addSystemMessage(content: string) {
    setMessages((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        role: 'assistant',
        content,
        createdAt: new Date(),
      },
    ]);
  }

  return {
    status,
    messages,
    sendMessage,
    addSystemMessage,
  };
}
