declare module '@betterbugs/web-sdk' {
  export interface BetterBugsStylesConfig {
    theme?: 'light' | 'dark';
    primaryColor?: string;
    primaryTextColor?: string;
    fontFamily?: string;
    fontFamilyUrl?: string;
    secondaryColor?: string;
    secondaryTextColor?: string;
    textColor?: string;
    mutedTextColor?: string;
    inputBgColor?: string;
  }

  export interface BetterbugsOptions {
    styles?: BetterBugsStylesConfig;
    email?: string;
    apiKey: string;
    /**
     * The project to report bugs to. Required when using a workspace-wide API
     * key; omit it if you are using a legacy project-scoped key.
     */
    projectId?: string;
    mainHeading?: string;
    emailFieldLabel?: string;
    emailFieldPlaceholder?: string;
    titleFieldLabel?: string;
    titleFieldPlaceholder?: string;
    descriptionFieldLabel?: string;
    descriptionFieldPlaceholder?: string;
    metaData?: Record<string | number, string | number | null>;
    // captureRewindOnScreenshot?: boolean;
    /**
     * How a screen recording is captured.
     *
     * - `recordVideo` — real video via `MediaRecorder`. Supported on every
     *   desktop browser: WebM on Chrome, Edge, Opera, Brave and Firefox, MP4 on
     *   Safari. **Not** available on mobile, where no browser implements
     *   `getDisplayMedia`.
     * - `domRecord` — rrweb DOM replay. Works everywhere, including mobile.
     *
     * Set explicitly and the SDK honours it as given, warning in the console if
     * the browser can't support it. Leave it unset and the SDK picks the best
     * mode the current browser can actually deliver.
     *
     * @default `recordVideo` where supported, otherwise `domRecord`
     */
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
    /**
     * Require the reporter to attach media before the bug can be submitted.
     * A screenshot **or** a screen recording satisfies it; file attachments do
     * not. When nothing is captured, submitting shows an inline error next to
     * the evidence buttons instead of sending the report.
     *
     * Has no effect if both `disableScreenshot` and `disableRecording` are
     * `true` — there would be no way to satisfy it, so the SDK warns and
     * leaves media optional.
     *
     * @default false
     */
    mediaRequired?: boolean;
    /**
     * Capture screenshots from the browser's own rendered pixels
     * (`getDisplayMedia`) rather than by re-rendering the DOM. Far more
     * accurate — cross-origin iframes, video, WebGL and modern CSS all come
     * out correct — at the cost of one permission prompt per capture.
     *
     * Available on all desktop browsers. Chromium shares this tab directly;
     * Safari and Firefox have no tab surface to offer, so the user shares a
     * screen or window and the SDK crops the viewport out of it — which means
     * an extra click in the picker, and an automatic fall back to DOM
     * rendering if the viewport cannot be located reliably. Mobile has no
     * screen capture at all and always uses DOM rendering.
     *
     * Set to `false` to always use DOM rendering and never prompt.
     * @default true
     */
    preferNativeCapture?: boolean;
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
    | 'stylesUpdate'
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
