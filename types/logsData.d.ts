import { ConsoleLogsObject } from './consolelogs';
import { NetworkLogsObject } from './networklogs';
import { StepsObject } from './steps';
import { ApplicationDataObject } from './applicationData';

export interface LogData {
  tabId?: string;
  timestamp: number;
  type: 'console' | 'network' | 'step' | 'application' | 'rewind';
  recordingIds?: string[];
  data:
    | ConsoleLogsObject
    | NetworkLogsObject
    | StepsObject
    | ApplicationDataObject
    | RewindLogsObject;
}
