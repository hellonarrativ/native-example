
export const saveUserToken = (token: string) => {
  return true;
};


type LoginParams = {
  email: string;
  password: string;
};

type RegistrationParams = {
  name: string;
  email: string;
  password: string;
};

export const login = ({ email, password }: LoginParams) => {
  let error = "";

  if (!email) error = "Missing email field";
  else if (!password) error = "Missing password field";

  const response = error ? { error } : { userId: 1, token: "ABCDEFG" };
  return response
};

export const register = ({ name, email, password }: RegistrationParams) => {
  let error = "";

  if (!name) error = "Missing name field";
  else if (!email) error = "Missing email field";
  else if (!password) error = "Missing password field";

  const response = error ? { error } : { userId: 1, token: "ABCDEFG" };
  return response
};