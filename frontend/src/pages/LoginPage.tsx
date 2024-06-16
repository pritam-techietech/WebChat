import React from "react";
import { FaKey } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full bg-purple-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100 p-6">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-green-400"> WebChat</span>
        </h1>
        <form className="my-4">
          <label className="input input-bordered flex items-center gap-2">
            <CgProfile/>
            <input type="text" className="grow" placeholder="Username" />
          </label>
          <label className="input mt-1 input-bordered flex items-center gap-2">
            <FaKey/>
            <input type="password" className="grow" placeholder="Password" />
          </label>
          <div className="flex">
            <button className="btn btn-success mt-2 mx-auto w-1/2 text-blue-800 text-xl">
              Login
            </button>
          </div>
          <a href="#" className="text-sm mt-4 hover:underline hover:text-red-400">Don't have an account?</a>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
