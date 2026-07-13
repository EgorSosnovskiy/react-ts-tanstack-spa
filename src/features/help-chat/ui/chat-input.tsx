import { useState } from 'react';

import { SendHorizontal } from 'lucide-react';

import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';

interface ChatInputProps {
  onSend(message: string): void;
  disabled?: boolean;
}

export function ChatInput({ onSend, disabled }: ChatInputProps) {
  const [value, setValue] = useState('');
  const canSend = !disabled && value.trim().length > 0;

  function handleSend() {
    const text = value.trim();

    if (!text) return;

    onSend(text);

    setValue('');
  }

  return (
    <div className="bg-background flex items-center gap-3 border-t p-4">
      <Input
        placeholder="Type your message..."
        value={value}
        disabled={disabled}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && canSend) {
            e.preventDefault();
            handleSend();
          }
        }}
      />

      <Button onClick={handleSend} disabled={!canSend} size="icon">
        <SendHorizontal className="size-4" />
      </Button>
    </div>
  );
}
