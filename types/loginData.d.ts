import type { UserObject } from './user';

export interface LoginDataResponse {
  venueUser?: UserObject;
  session?: SessionObject;
}

export interface LoginSuccessResponseLimits {
  maxScreenRecordingDurationSeconds?: number;
}

export interface LoginSuccessResponse {
  id: string;
  projectId: string;
  subscriptionPlanId?: string;
  limits?: LoginSuccessResponseLimits;
}
