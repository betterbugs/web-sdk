declare module '@betterbugs/web-sdk' {
  export interface BetterbugsOptions {
    email?: string;
    apiKey: string;
    metaData?: Record<string | number, string | number | null>;
    // captureRewindOnScreenshot?: boolean;
    recordType?: 'recordVideo' | 'domRecord';
    primaryColor?: string;
    primaryTextColor?: string;
    bugSuccessComponent?: React.ReactNode | string;
    position?: {
      top?: string;
      left?: string;
      bottom?: string;
      right?: string;
    };
    mode?: 'development' | 'production';
    theme?: 'light' | 'dark';
    // enableRewind?: boolean;
    enableAnnotation?: boolean;
    widgetOpen?: boolean;
    showActionButton?: boolean;
    maxRecordingMinutes?: number;
    triggerEvent?: (event: string, data?: unknown) => void;
    actionButtonComponent?: React.ReactNode | string;
    disableScreenshot?: boolean;
    disableRecording?: boolean;
  }

  export interface BugReportData {
    title: string;
    description: string;
    screenshot?: string;
    recording?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    logs?: any[];
    metaData?: Record<string | number, string | number | null>;
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
    getEmail(): string;
    getPrimaryColor(): string;
    getPrimaryTextColor(): string;
    getMetadata(): Record<string | number, string | number | null>;
    getWidgetOpen(): boolean;
    getPosition(): {
      top?: string;
      left?: string;
      bottom?: string;
      right?: string;
    };
    destroy(): void;
    getMode(): 'development' | 'production';
    getShowActionButton(): boolean;

    // Setters
    setAPIKey(apiKey: string): void;
    setEmail(email: string): void;
    setMetadata(
      metaData: Array<{ title: string | null; value: string | null }>,
    ): void;
    setPosition(position: {
      top?: string;
      left?: string;
      bottom?: string;
      right?: string;
    }): void;

    changeTheme(theme: 'light' | 'dark'): void;
    changePrimaryColor(primaryColor: string): void;
    changePrimaryTextColor(primaryTextColor: string): void;

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
