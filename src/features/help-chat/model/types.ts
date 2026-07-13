export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  createdAt: Date;
}

export type ChatConnectionStatus = 'connecting' | 'connected' | 'disconnected';

export const WELCOME_MESSAGE: ChatMessage = {
  id: 'welcome-message',
  role: 'assistant',
  content:
    '👋 Hello! Welcome to Fraud Detection Support.\n\nHow can we help you today?',
  createdAt: new Date(),
};
