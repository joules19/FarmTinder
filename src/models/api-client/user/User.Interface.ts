export interface UserProfile {
  userId: string;
  accountId: string;
  userPin: string;
  token: null;
  userEmail: null;
  didAutoLogout: false;
  errorResponse: "";
}

export interface CreateUser {
  accountId: string;
  userPin: string;
  token: null;
  userEmail: null;
  didAutoLogout: false;
  errorResponse: "";
}
