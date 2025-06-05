export interface ConsoleLogsObject {
  id: string;
  type: 'info' | 'warn' | 'error' | 'log' | 'debug' | 'networkError';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  args?: any;
  timestamp: number;
  createdAt: string;
  url: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  file: any[];
}
