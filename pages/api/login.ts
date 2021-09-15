import type { NextApiRequest, NextApiResponse } from "next";

type RequestPayload = NextApiRequest & {
  query: {
    email: string;
    password: string;
  };
};

type Response = {
  userId?: number;
  token?: string;
  error?: string;
};

const users = [
  {
    "user": "qa_testing@narrativ.com",
    "password": "qwerty",
  },
  {
    "user": "qa@narrativ.com",
    "password": "qwerty",
  }
]

export default function handler(
  req: RequestPayload,
  res: NextApiResponse<Response>
) {
  const {
    body: { email, password },
  } = req;

  let error = "";
  let verified_user = "";

  if (!email) error = "Missing email field";
  else if (!password) error = "Missing password field";
  else {
    for (let i = 0; i < 2; i++) {
      if (users[i]['user'] == email) {
        if (users[i]['password'] == password){
          verified_user = email;
          break;
        }
        else {
          error = "Incorrect password";
          break;
        }
      }
      if (i == 1) error = "Cannot find user";
    }
  }
  const code = error ? 400 : 200;
  const response = error ? { error } : { userId: 1, token: "ABCDEFG" };

  res.status(code).json(response);
}
