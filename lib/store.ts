
export const saveUserToken = (token: string) => {
  return true;
};


type Params = {
  email: string;
  password: string;
};

export const login = ({ email, password }: Params) => {
  let error = "";

  if (!email) error = "Missing email field";
  else if (!password) error = "Missing password field";

  const response = error ? { error } : { userId: 1, token: "ABCDEFG" };
  return response
};
