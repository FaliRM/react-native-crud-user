export type RootStackParamList = {
  Entry: undefined;
  Home: undefined;
  Signup: { isUpdating: boolean } | undefined;
  Login: undefined;
  Profile: undefined;
};

export interface UserRaw {
  email: string;
  password: string;
}

export type User = UserRaw & { id: number };
