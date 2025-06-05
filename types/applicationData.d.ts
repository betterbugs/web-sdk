export interface ApplicationDataObject {
  id?: string;
  sessionId?: string;
  type: 'local' | 'session' | 'cookie';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  args?: any;
  timestamp: number;
  url: string;
  createdAt?: string;
}
