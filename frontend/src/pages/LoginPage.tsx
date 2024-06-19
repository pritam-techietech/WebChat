import { useForm } from "react-hook-form";
import { CgProfile } from "react-icons/cg";
import { FaKey } from "react-icons/fa";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";
import { LoginBodyInterface } from "../interfaces/LoginBodyInterface";
const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const {loading,login} = useLogin();
  const onSubmit = async (data: LoginBodyInterface) => {
    console.log(data);
    await login(data);

  }
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full bg-purple-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100 p-6">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-green-400"> WebChat</span>
        </h1>
        <form className="my-4" onSubmit={handleSubmit(onSubmit)}>
          <label className="input input-bordered flex items-center gap-2">
            <CgProfile />
            <input
              type="text"
              className="grow"
              placeholder="Username"
              {...register("username", { required: true })}
            />
          </label>
          {errors.username?.type === "required" && (
            <p role="alert" className="ms-2 text-red-400">
              * Username is required
            </p>
          )}
          <label className="input mt-1 input-bordered flex items-center gap-2">
            <FaKey />
            <input
              type="password"
              className="grow"
              placeholder="Password"
              {...register("password", { required: true })}
            />
          </label>
          {errors.password?.type === "required" && (
            <p role="alert" className="ms-2 text-red-400">
              * Password is required
            </p>
          )}
          <div className="flex">
            <button 
            className="btn btn-success mt-2 mx-auto w-1/2 text-blue-800 text-xl"
            disabled = {loading}
            >
              {loading ? <span className="loading loading-spinner"/> : "Login"}
            </button>
          </div>
          <Link
            to="/signup"
            className="text-sm mt-4 hover:underline hover:text-red-400"
          >
            Don't have an account?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
