import { ChatDialog, useChat, WELCOME_MESSAGE } from '@/features/help-chat';

interface HelpChatProps {
  open: boolean;
  onOpenChange(open: boolean): void;
}

export function HelpChat({ open, onOpenChange }: HelpChatProps) {
  const { status, messages, sendMessage } = useChat();

  const displayMessages =
    messages.length === 0 ? [WELCOME_MESSAGE] : [WELCOME_MESSAGE, ...messages];

  return (
    <ChatDialog
      open={open}
      onOpenChange={onOpenChange}
      status={status}
      messages={displayMessages}
      onSend={sendMessage}
    />
  );
}
