export interface BrowserInfo {
  name?: string;
  version?: string;
}

export interface EngineInfo {
  name?: string;
  version?: string;
}

export interface OsInfo {
  name?: string;
  version?: string;
}

export interface DeviceInfo {
  type?: string;
  vendor?: string;
  model?: string;
}

export interface WindowSize {
  width: string;
  height: string;
}

interface GeoLocation {
  range: string;
  country: string;
  region: string;
  city: string;
  ll: [number, number];
  metro: number;
  area: number;
  eu: string;
  timezone: string;
}

export interface SystemInfo {
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
  sdkVersion: string;
  devicePixelRatio: number;
}
