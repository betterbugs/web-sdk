export interface BetterBugsConfiguration {
  theme?: 'light' | 'dark';
  primaryActionBg?: string;
  primaryTextColor?: string;
  mainHeaderText?: string;
  subHeaderText?: string;
  startRecordingBtnText?: string;
  emailFieldLabel?: string;
  emailFieldPlaceholder?: string;
  titleFieldLabel?: string;
  titleFieldPlaceholder?: string;
  descriptionFieldLabel?: string;
  descriptionFieldPlaceholder?: string;
}

declare global {
  interface Window {
    __BetterbugsRecordingLinkConfig?: BetterBugsConfiguration;
  }
}
