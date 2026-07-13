import type { ChatConnectionStatus } from '../model/types';

interface ChatStatusProps {
  status: ChatConnectionStatus;
}

export function ChatStatus({ status }: ChatStatusProps) {
  const connected = status === 'connected';

  return (
    <div className="text-muted-foreground flex items-center gap-2 text-xs">
      <div
        className={`h-2 w-2 rounded-full ${
          connected ? 'bg-green-500' : 'bg-yellow-500'
        }`}
      />

      {connected ? 'Connected' : 'Connecting...'}
    </div>
  );
}
