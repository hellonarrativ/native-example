import type { NextPage } from "next";
import { useState } from "react";
import { useRouter } from "next/router";
import classNames from "classnames";
import { saveUserToken } from "../lib/store";


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

// import { saveUserToken } from "../lib/store";


const Login: NextPage = () => {
  // saveUserToken('the token')

  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errormessage, setErrorMessage] = useState<string>("aaa something went wrong...");

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if ('error' in data){
          console.error({'Error': data["error"]});
          document.getElementById("error-msg")?.removeAttribute("hidden");  
          setErrorMessage(data["error"]);        
        } else {
          document.getElementById("error-msg")?.setAttribute("hidden", "");
          saveUserToken(data.token);
          router.push("/dashboard");
        }
      })
      .catch((error) => {
        console.error({'Error': error});
      });
    };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img className="mx-auto h-12 w-auto" src="/logo.png" alt="Workflow" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Login
          </h2>
        </div>
        
        <div className="text-center">
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div id="error-msg" className="error-msg" hidden>
            <Message text={errormessage} />
          </div>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                onChange={(event) => setEmail(event.target.value)}
                name="email"
                type="email"
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
                onChange={(event) => setPassword(event.target.value)}
                name="password"
                type="password"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              login
            </button>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
