export interface BetterBugsStylesConfig {
  theme?: 'light' | 'dark';
  primaryColor?: string;
  primaryTextColor?: string;
}

export interface BetterBugsConfiguration {
  styles?: BetterBugsStylesConfig;
  brandLogoUrl?: string;
  brandUrl?: string;
  mainHeaderText?: string;
  subHeaderText?: string;
  startRecordingBtnText?: string;
  emailFieldLabel?: string;
  emailFieldPlaceholder?: string;
  titleFieldLabel?: string;
  titleFieldPlaceholder?: string;
  descriptionFieldLabel?: string;
  descriptionFieldPlaceholder?: string;
  successMessageHeaderText?: string;
  successMessageSubHeaderText?: string;
  metaData?: Record<string | number, string | number | null>;
}

declare global {
  interface Window {
    __BetterbugsRecordingLinkConfig?: BetterBugsConfiguration;
  }
}
