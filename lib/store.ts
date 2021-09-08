import cookie from "js-cookie";

const cookieLifetimeDays = 2;

export const saveUserToken = (token: string) => {
  cookie.set("token", token, { expires: cookieLifetimeDays });
};
