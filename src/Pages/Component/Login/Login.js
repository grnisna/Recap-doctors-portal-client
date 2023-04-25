import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  return (
    <div className="h-[600px] flex justify-center items-center">

      <div className="border-double rounded border-4 p-10 w-96 ">
        <h1 className="font-bold text-center text-3xl mb-5">Please Login</h1>


        <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input className="input input-bordered w-full "  {...register("email")}/>
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type='password' className="input input-bordered w-full "  {...register("password")}/>
            <label className="label">
              <span className="label-text">Forget Password ?</span>
            </label>
          </div>
          
          <input className="btn mt-4  input-bordered w-full " value='Login' type="submit" />
          <p>Here you New? <Link className="text-secondary" to='/signup'>Create a New Account</Link></p>

            <div className="divider">OR</div>

            <button className="btn w-full" >Continue With Google</button>


        </form>
      </div>
    </div>
  );
};

export default Login;
