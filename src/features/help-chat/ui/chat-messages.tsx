import { useEffect, useRef } from 'react';

import type { ChatMessage as ChatMessageType } from '../model/types';
import { ChatMessage } from './chat-message';

interface ChatMessagesProps {
  messages: ChatMessageType[];
}

export function ChatMessages({ messages }: ChatMessagesProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: 'smooth',
    });
  }, [messages]);

  return (
    <div className="flex flex-1 flex-col gap-4 overflow-y-auto px-4 py-4">
      {messages.map((message) => (
        <ChatMessage key={message.id} message={message} />
      ))}

      <div ref={bottomRef} />
    </div>
  );
}
