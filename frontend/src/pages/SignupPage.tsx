import React from "react";
import { FaKey } from "react-icons/fa";
const SignupPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full bg-purple-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100 p-6">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Signup
          <span className="text-green-400"> WebChat</span>
        </h1>
        <form className="my-4">
          <label className="input input-bordered flex items-center gap-2">
            Username :
            <input
              type="text"
              className="grow"
              placeholder="Enter unique username"
            />
          </label>

          <label className=" mt-1 input input-bordered flex items-center gap-2">
            Full name :
            <input
              type="text"
              className="grow"
              placeholder="Enter your full name"
            />
          </label>

          <select className="mt-1 w-full select select-text">
            <option disabled selected>
              Gender
            </option>
            <option>Male</option>
            <option>Female</option>
          </select>

          <label className="input mt-1 input-bordered flex items-center gap-2">
            <FaKey/>
            <input type="password" className="grow" placeholder="Password" />
          </label>
          <label className="input mt-1 input-bordered flex items-center gap-2">
            <FaKey/>
            <input
              type="password"
              className="grow"
              placeholder="Confirm Password"
            />
          </label>
          <a
            href="#"
            className="text-sm mt-4 hover:underline hover:text-red-400"
          >
            Already have an account?
          </a>
          <div className="flex">
            <button className="btn btn-success mt-2 mx-auto w-1/2 text-blue-800 text-xl">
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
