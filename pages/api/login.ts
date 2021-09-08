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

export default function handler(
  req: RequestPayload,
  res: NextApiResponse<Response>
) {
  const {
    body: { email, password },
  } = req;

  let error = "";

  if (!email) error = "Missing email field";
  else if (!password) error = "Missing password field";

  const code = error ? 400 : 200;
  const response = error ? { error } : { userId: 1, token: "ABCDEFG" };

  res.status(code).json(response);
}
