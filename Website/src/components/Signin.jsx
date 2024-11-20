import React, { useState } from "react";
import { Mail, LockKeyhole } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "http://localhost:2000/auth/signin",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response.data.message);
        toast.success("Signed in successfully!", {
          position: "bottom-center",
        });
        setTimeout(() => {
          navigate("/home");
        }, 1500);
        console.log(`Token is ${response.data.message}`)
        localStorage.setItem(
          "token",
          JSON.stringify({
            token: response.data.message,
          })
        );
      })
      .catch((error) => {
        if (error.response) {
          console.error(error.response.data.message);
          toast.error(error.response.data.message, {
            position: "bottom-center",
          });
        } else if (error.request) {
          console.error("No response received:", error.request);
          toast.error("No response from server. Please try again later.", {
            position: "bottom-center",
          });
        } else {
          console.error("Error:", error.message);
          toast.error("An error occurred. Please try again.", {
            position: "bottom-center",
          });
        }
      });
  };

  return (
    <div className="flex flex-col m-auto mt-20 bg-neutral-900 pb-8 w-[550px]">
      <div className="flex flex-col items-center gap-4 w-full mt-8">
        <div className="text-3xl font-medium">Welcome Back!</div>
        <div className="w-14 h-1 bg-green-400 rounded-md"></div>
      </div>
      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
        <div className="flex items-center m-auto w-96 h-10 rounded-md ">
          <Mail className="my-0 mx-8 " />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="h-10 w-96 bg-transparent border-none outline-none text-base"
          />
        </div>
        <div className="flex items-center m-auto w-96 h-10 rounded-md ">
          <LockKeyhole className="my-0 mx-8 " />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="h-10 w-96 bg-transparent border-none outline-none text-base"
          />
        </div>
        <div className="flex gap-8 my-5 mx-auto">
          <button
            type="submit"
            className="flex justify-center items-center w-48 h-12 text-base cursor-pointer rounded-xl bg-green-400"
          >
            Sign In
          </button>
        </div>
      </form>
      <div className="pl-[200px] text-sm cursor-pointer">
        Don't have an account?
        <span className="text-blue-600 underline"> Sign Up Here!</span>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signin;
