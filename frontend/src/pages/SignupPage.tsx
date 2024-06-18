import { useForm } from "react-hook-form";
import { FaKey } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SignupBodyInterface } from "../interfaces/SignupBodyInterface";
import useSignup from "../hooks/useSignup";

const SignupPage = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      username: "",
      fullName: "",
      gender: "",
      password: "",
      confirmPassword: "",
    },
  });
  const { loading, signup } = useSignup();
  const onSubmit = async (data: SignupBodyInterface) => {
    console.log("signup clicked");
    console.log(data);
    await signup(data);
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full bg-purple-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100 p-6">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Signup
          <span className="text-green-400"> WebChat</span>
        </h1>
        <form className="my-4" onSubmit={handleSubmit(onSubmit)}>
          {/* Username */}
          <label className="input input-bordered flex items-center gap-2">
            Username :
            <input
              type="text"
              className="grow"
              placeholder="Enter unique username"
              {...register("username")}
            />
          </label>
          {/* {errors.username?.type === "required" && (
              <p role="alert" className="ms-2 text-red-400">* Username is required</p>
            )} */}
          {/* full name */}
          <label className=" mt-1 input input-bordered flex items-center gap-2">
            Full name :
            <input
              type="text"
              className="grow"
              placeholder="Enter your full name"
              {...register("fullName")}
            />
          </label>
          {/* {errors.fullName?.type === "required" && (
              <p role="alert" className="ms-2 text-red-400">* Full name is required</p>
            )} */}
          {/* Gender */}
          <select
            className="mt-1 w-full select select-text"
            {...register("gender")}
          >
            <option value={""} disabled selected className="h-10">
              Gender
            </option>
            <option value={"male"} className="h-10">
              Male
            </option>
            <option value={"female"} className="h-10">
              Female
            </option>
          </select>
          {/* {errors.gender?.type === "required" && (
              <p role="alert" className="ms-2 text-red-400">* Gender is required</p>
            )} */}
          {/* Password */}
          <label className="input mt-1 input-bordered flex items-center gap-2">
            <FaKey />
            <input
              type="password"
              className="grow"
              placeholder="Password"
              {...register("password")}
            />
          </label>
          {/* {errors.password?.type === "required" && (
              <p role="alert" className="ms-2 text-red-400">* Password is required</p>
            )} */}

          {/* confirm Password */}
          <label className="input mt-1 input-bordered flex items-center gap-2">
            <FaKey />
            <input
              type="password"
              className="grow"
              placeholder="Confirm Password"
              {...register("confirmPassword")}
            />
          </label>
          <Link
            to="/login"
            className="text-sm mt-4 hover:underline hover:text-red-400"
          >
            Already have an account?
          </Link>
          <div className="flex">
            <button
              type="submit"
              className="btn btn-success mt-2 mx-auto w-1/2 text-blue-800 text-xl"
              disabled={loading}
            >
              {loading? <span className="loading loading-spinner"></span> : "Signup"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
