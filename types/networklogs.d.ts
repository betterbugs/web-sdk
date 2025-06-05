export interface NetworkLogsObject {
  id: string;
  tabId?: string;
  sessionId?: string;
  initiator?: string;
  method?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  requestBody?: any;
  response?: string;
  startTime?: number;
  endTime?: number;
  requestHeaders?: {
    name?: string;
    value?: string;
  }[];
  requestTime?: number;
  responseHeaders?: {
    name?: string;
    value?: string;
  }[];
  responseTime?: number;
  isError?: boolean;
  statusCode?: number;
  statusLine?: string;
  type?: string;
  url?: string;
  createdAt: string;
  timestamp?: number;
}
