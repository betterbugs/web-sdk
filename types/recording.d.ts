declare module '@/types/recording' {
  interface BrowserInfo {
    name?: string;
    version?: string;
  }

  interface EngineInfo {
    name?: string;
    version?: string;
  }

  interface OsInfo {
    name?: string;
    version?: string;
  }

  interface DeviceInfo {
    type?: string;
    vendor?: string;
    model?: string;
  }

  interface WindowSize {
    width: string;
    height: string;
  }

  interface SystemInfo {
    url: string;
    userAgent: string;
    browser: BrowserInfo;
    engine: EngineInfo;
    os: OsInfo;
    device: DeviceInfo;
    windowOuterSize: WindowSize;
    windowInnerSize: WindowSize;
    scrollSize: WindowSize;
    networkSpeed: string;
    batteryPercentage: string;
    isCharging: boolean;
    sdkVersion?: string;
    devicePixelRatio: number;
  }

  interface VideoObject {
    id: string;
    sessionId?: string;
    videoUniqueId?: string;
    chunkDate?: string;
    url?: string;
    duration?: number;
    size?: number;
    file?: string;
    uploadError?: boolean;
    status?: 'triggered' | 'started' | 'failed' | 'completed';
    clickTimestamp?: number;
    clickDateTime?: string;
    startTimestamp?: number;
    startDateTime?: string;
    endTimestamp?: number;
    endDateTime?: string;
    timeout?: number;
    annotations?: string[];
    microphonePreference?: {
      audioEnable?: 'enabled' | 'disabled';
      preferAudioDevice?: string;
    };
    videoPreference?: {
      videoEnable?: 'enabled' | 'disabled';
      preferVideoDevice?: string;
    };
    createdAt?: string;
  }

  interface ConsoleLogsObject {
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

  interface StepsObject {
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

  interface ApplicationDataObject {
    id?: string;
    sessionId?: string;
    type: 'local' | 'session' | 'cookie';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    args?: any;
    timestamp: number;
    url: string;
    createdAt?: string;
  }

  interface NetworkLogsObject {
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

  interface SessionObject {
    id: string;
    sessionId?: string;
    type: 'screenshot' | 'rewind' | 'screenRecording';
    markerOpened?: boolean;
    reporter?: unknown;
    title?: string;
    description?: string;
    assignee?: unknown;
    email?: unknown;
    sessionType: string;
    priority?: {
      name: string;
      value: string;
    };
    file?: string;
    status?: 'triggered';
    metaData?: {
      title: unknown;
      value: unknown;
    }[];
    tags?: string[];
    tabId?: string;
    tabTitle?: string;
    project?: string;
    workspace?: string;
    systemInfo?: SystemInfo;
    trim?: {
      minVal: number;
      maxVal: number;
    };
    videoUniqueId?: string;
    chunkDate?: string;
    sessionHasVideo?: VideoObject;
    sessionHasConsoleLogs?: ConsoleLogsObject[];
    sessionHasNetworkLogs?: NetworkLogsObject[];
    sessionHasSteps?: StepsObject[];
    sessionHasApplicationData?: ApplicationDataObject[];
    createdAt?: number;
    stackTrace?: {
      startTime: number;
      endTime: number;
    }[];
    clickTimestamp?: number;
    clickDateTime?: string;
    startTimestamp?: number;
    startDateTime?: string;
    endTimestamp?: number;
    endDateTime?: string;
  }

  interface LogData {
    tabId?: string;
    timestamp: number;
    type: 'console' | 'network' | 'step' | 'application';
    data:
      | ConsoleLogsObject
      | NetworkLogsObject
      | StepsObject
      | ApplicationDataObject;
    recordingIds?: string[];
  }
}
