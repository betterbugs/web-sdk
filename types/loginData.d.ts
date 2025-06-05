import type { UserObject } from './user';

export interface LoginDataResponse {
  venueUser?: UserObject;
  session?: SessionObject;
}

export interface LoginSuccessResponse {
  accessToken: string;
  expireAt: string;
  id: string;
}
