export interface StepsObject {
  id: string;
  sessionId?: string;
  tabId?: string;
  eventType: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  eventData?: any;
  eventElement: string | null;
  timestamp: number | string;
  url: string;
  createdAt: string;
  count?: number | string;
  responseTime?: number | string;
  requestTime?: number | string;
}
