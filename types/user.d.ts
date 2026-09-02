export interface UserObject {
  id: string;
  name: string;
  email: string;
  status: string;
  lastLogin: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}

/**
 * A project/workspace member as returned by `GET /sdk/user`. Deliberately not
 * `UserObject`: that endpoint returns a narrow projection (no status /
 * lastLogin / isDeleted) plus avatar fields the full user record lacks.
 */
export interface MemberObject {
  id: string;
  name?: string;
  email?: string;
  /** S3 key, or an absolute URL for OAuth profile pictures. */
  image?: string;
  role?: string;
  /** Server-assigned colours for the initials fallback. */
  avatarColor?: {
    bgColor?: string;
    color?: string;
  };
}
