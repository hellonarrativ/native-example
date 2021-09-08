import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import classNames from "classnames";
import { saveUserToken } from "../lib/store";
import { useRouter } from "next/router";

const Message = ({
  text,
  type = "error",
}: {
  text: string;
  type?: "error" | "info";
}) => {
  return (
    <div
      className={classNames("border px-4 py-3 rounded relative", {
        "text-red-700 border-red-400 bg-red-100": type === "error",
        "text-blue-700 border-blue-400 bg-blue-100": type === "info",
      })}
      role="alert"
    >
      <span className="block sm:inline">{text}</span>
      <span className="absolute top-0 bottom-0 right-0 px-4 py-3" />
    </div>
  );
};

const Register: NextPage = () => {
  const router = useRouter();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<boolean>("");
  const [password, setPassword] = useState<string[]>(null);

  const handleSubmit = (e: React.SyntheticEvent) => {
    fetch("/api/register", {
      method: "PST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "", email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        saveUserToken(data.token);
        router.push("#dashboard");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img className="mx-auto h-12 w-auto" src="/logo.png" alt="Workflow" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Crate a new account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            or{" "}
            <Link href={"/login"}>
              <a className="font-medium text-indigo-600 hover:text-indigo-500">
                login to an existing one
              </a>
            </Link>
          </p>
        </div>
        <form onSubmit={{ handleSubmit(); }} className="mt-8 space-y-6">
          <Message text={"something went wrong..."} />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Name
              </label>
              <input
                id="email-address"
                onChange={(event) => setName(event.target.value)}
                name="name"
                type="email"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Namee"
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="name"
                type="text"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                onChange={(event) => setName(event.target.value)}
                name="password"
                disabled
                type="text"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button
              type="button"
              disabled
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Create acount
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
