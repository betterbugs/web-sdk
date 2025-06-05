export interface RewindDataObject {
  id: string;
  sessionId?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  event?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  events?: any[];
  file?: string;
  status?: string;
  duration?: number;
  size?: number;
  clickTimestamp?: number;
  clickDateTime?: string;
  startTimestamp?: number;
  startDateTime?: string;
  endTimestamp?: number;
  timestamp?: number;
  endDateTime?: string;
  createdAt: string;
  type?: string;
  url?: string;
  tabId?: string;
  trim?: {
    minVal: number;
    maxVal: number;
  };
}
