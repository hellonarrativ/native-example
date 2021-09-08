import type { NextApiRequest, NextApiResponse } from "next";

type RequestPayload = NextApiRequest & {
  query: {
    name: string;
    email: string;
    password: string;
  };
};

type Response = {
  userId?: number;
  token?: string;
  error?: string;
};

export default function handler(
  req: RequestPayload,
  res: NextApiResponse<Response>
) {
  const {
    body: { name, email, password },
  } = req;

  let error = "";

  if (req.method !== "POST") error = "Unrecognized request method";
  else if (!name) error = "Missing name field";
  else if (!email) error = "Missing email field";
  else if (!password) error = "Missing password field";

  const code = error ? 400 : 200;
  const response = error ? { error } : { userId: 1, token: "ABCDEFG" };

  res.status(code).json(response);
}
