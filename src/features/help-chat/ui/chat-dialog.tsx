import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/shared/ui/dialog';

import type { ChatConnectionStatus, ChatMessage } from '../model/types';
import { ChatInput } from './chat-input';
import { ChatMessages } from './chat-messages';
import { ChatStatus } from './chat-status';

interface ChatDialogProps {
  open: boolean;
  onOpenChange(open: boolean): void;

  status: ChatConnectionStatus;

  messages: ChatMessage[];

  onSend(message: string): void;
}

export function ChatDialog({
  open,
  onOpenChange,
  status,
  messages,
  onSend,
}: ChatDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="flex h-[85vh] w-[95vw] max-w-2xl flex-col overflow-hidden p-0 sm:h-175">
        <DialogHeader className="border-b px-6 py-4">
          <DialogTitle className="flex flex-col gap-2">
            <span>Support Chat</span>

            <ChatStatus status={status} />
          </DialogTitle>
        </DialogHeader>

        <ChatMessages messages={messages} />

        <ChatInput onSend={onSend} disabled={status !== 'connected'} />
      </DialogContent>
    </Dialog>
  );
}
