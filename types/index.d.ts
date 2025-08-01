declare module '@betterbugs/web-sdk' {
  export interface BetterBugsStylesConfig {
    theme?: 'light' | 'dark';
    primaryColor?: string;
    primaryTextColor?: string;
  }

  export interface BetterbugsOptions {
    styles?: BetterBugsStylesConfig;
    email?: string;
    apiKey: string;
    mainHeading?: string;
    emailFieldLabel?: string;
    emailFieldPlaceholder?: string;
    titleFieldLabel?: string;
    titleFieldPlaceholder?: string;
    descriptionFieldLabel?: string;
    descriptionFieldPlaceholder?: string;
    metaData?: Record<string | number, string | number | null>;
    // captureRewindOnScreenshot?: boolean;
    recordType?: 'recordVideo' | 'domRecord';
    // bugSuccessComponent?: React.ReactNode | string;
    successMessageHeaderText?: string;
    successMessageSubHeaderText?: string;
    position?: {
      top?: string;
      left?: string;
      bottom?: string;
      right?: string;
    };
    mode?: 'development' | 'production';
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
    getMetadata(): Record<string | number, string | number | null>;
    getRecordType(): 'recordVideo' | 'domRecord';
    setRecordType(recordType: 'recordVideo' | 'domRecord'): void;
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
      metaData: Record<string | number, string | number | null>,
    ): void;
    setPosition(position: {
      top?: string;
      left?: string;
      bottom?: string;
      right?: string;
    }): void;

    setStyles(styles: BetterBugsStylesConfig): void;
    getStyles(): BetterBugsStylesConfig;

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
