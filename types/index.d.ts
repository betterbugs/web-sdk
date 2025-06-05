declare module '@betterbugs/web-sdk' {
  export interface BetterbugsOptions {
    apiKey: string;
    metaData?: Record<string | number, string | null>;
    captureRewindOnScreenshot?: boolean;
    recordType?: 'getDisplayMedia' | 'rrweb';
    position?: {
      top?: string;
      left?: string;
      bottom?: string;
      right?: string;
    };
    mode?: 'development' | 'production';
    enableRewind?: boolean;
    enableAnnotation?: boolean;
    widgetOpen?: boolean;
    showActionButton?: boolean;
    accessToken?: string;
    maxRecordingMinutes?: number;
    triggerEvent?: (event: string, data?: unknown) => void;
  }

  export interface BugReportData {
    title: string;
    description: string;
    screenshot?: string;
    recording?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    logs?: any[];
    metaData?: Record<string | number, string | null>;
  }

  export type EventCallback = (data: unknown) => void;

  export type BetterbugsEvent =
    | 'screenshot'
    | 'recordingStart'
    | 'recordingStop'
    | 'bugSubmit'
    | 'apiKeyUpdate'
    | 'emailUpdate'
    | 'metaDataUpdate'
    | 'captureRewindOnScreenshotUpdate'
    | 'recordTypeUpdate'
    | 'positionUpdate'
    | 'modeUpdate'
    | 'enableRewind'
    | 'enableAnnotation'
    | 'widgetOpen'
    | 'widgetClose'
    | 'showActionButton'
    | 'hideActionButton'
    | 'sessionCreated'
    | 'recordingPreviewOpen'
    | 'recordingPreviewClose';

  export class Betterbugs {
    constructor(options: BetterbugsOptions);

    // Getters
    // getAPIKey(): string;
    // getEmail(): string;
    getMetadata(): Record<string | number, string | null>;
    getWidgetOpen(): boolean;
    getCaptureRewindOnScreenshot(): boolean;
    getRecordType(): 'getDisplayMedia' | 'rrweb';
    getPosition(): {
      top?: string;
      left?: string;
      bottom?: string;
      right?: string;
    };
    destroy(): void;
    getMode(): 'development' | 'production';
    getEnableRewind(): boolean;
    getEnableAnnotation(): boolean;
    getShowActionButton(): boolean;

    // Setters
    setAPIKey(apiKey: string): void;
    // setEmail(email: string): void;
    setMetadata(
      metaData: Array<{ title: string | null; value: string | null }>,
    ): void;
    setCaptureRewindOnScreenshot(captureRewindOnScreenshot: boolean): void;
    setRecordType(recordType: 'getDisplayMedia' | 'rrweb'): void;
    setPosition(position: {
      top?: string;
      left?: string;
      bottom?: string;
      right?: string;
    }): void;
    setMode(mode: 'development' | 'production'): void;
    setEnableRewind(enableRewind: boolean): void;
    setEnableAnnotation(enableAnnotation: boolean): void;

    // Widget controls
    openWidget(): void;
    closeWidget(): void;
    show(): void;
    hide(): void;

    // Recording methods
    startRecording(): void;
    stopRecording(): void;

    // Screenshot method
    captureScreenshot(): void;

    // Bug submission
    submitBug(data: BugReportData): void;

    // Event handling
    on(event: BetterbugsEvent, callback: EventCallback): void;
    off(event: BetterbugsEvent, callback: EventCallback): void;
  }

  export default Betterbugs;
}
