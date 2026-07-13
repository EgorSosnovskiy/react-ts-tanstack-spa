import { Avatar, AvatarFallback } from '@/shared/ui/avatar';
import { Bubble, BubbleContent } from '@/shared/ui/bubble';
import { Message, MessageAvatar, MessageContent } from '@/shared/ui/message';

import type { ChatMessage as ChatMessageType } from '../model/types';

interface ChatMessageProps {
  message: ChatMessageType;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';

  return (
    <Message align={isUser ? 'end' : 'start'}>
      <MessageAvatar>
        <Avatar>
          <AvatarFallback>{isUser ? 'YO' : 'AI'}</AvatarFallback>
        </Avatar>
      </MessageAvatar>

      <MessageContent>
        <Bubble
          align={isUser ? 'end' : 'start'}
          variant={isUser ? 'default' : 'muted'}
        >
          <BubbleContent>{message.content}</BubbleContent>
        </Bubble>
      </MessageContent>
    </Message>
  );
}
