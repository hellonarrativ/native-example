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

// Problem #1: Create a working Login Form
// - create a form that accepts an email and password from the user
// - upon submitting the form, it should make a POST request to /api/login
//   with a post body of "email" & "password" set to the form's values
// - if successful, a "token" property will be returned - save it
//   using the function on line 5
// - after saving the token, redirect the user to the /dashboard page
