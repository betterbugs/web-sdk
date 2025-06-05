export interface BugReportData {
  title: string;
  description: string;
  screenshot?: string;
  recording?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  logs?: any[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  metaData?: Record<string | number, any>;
}
