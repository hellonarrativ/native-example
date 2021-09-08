import type { NextPage } from "next";
import { saveUserToken } from "../lib/store";

const Login: NextPage = () => {
  // saveUserToken('the token')

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img className="mx-auto h-12 w-auto" src="/logo.png" alt="Workflow" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Login
          </h2>
        </div>

        <div className="text-center">the form goes here : )</div>
      </div>
    </div>
  );
};

export default Login;
