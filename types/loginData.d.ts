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
  // Returned by /sdk/auth/verify-api-key alongside the key's project. Optional
  // so older API deployments that omit it stay type-safe.
  workspaceId?: string;
  subscriptionPlanId?: string;
  limits?: LoginSuccessResponseLimits;
}
