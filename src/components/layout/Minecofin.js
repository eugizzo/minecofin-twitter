import React, { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/gov_logo.png";
import login from "../../utils/login";
import "./style.css";
const Minecofin = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setLoader] = useState(false);
  const [error, setError] = useState({});

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const onChangeEmail = (e) => {
    delete error["email"];
    delete error["message"];
    setEmail(e.target.value);
    setError({ ...error });
  };

  const onChangePassword = (e) => {
    delete error["password"];
    delete error["message"];
    setPassword(e.target.value);
    setError({ ...error });
  };

  const validateForm = () => {
    if (email === "") {
      error.email = "Email address is required";
    }
    if (password === "") {
      error.password = "Password is required";
    }
    setError({ ...error });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await validateForm();

    if (Object.keys(error).length > 0) return;

    setLoader(true);

    if (login(email, password)) {
      return (window.location.href = "/trending_topic");
    }

    error.message = "Wrong Email Address or Password";

    setError({ ...error });
    setLoader(false);
  };

  return (
    <div className="h-screen">
      <div className="container overflow-auto pt-3">
        <div className="flex ">
          <div className=" lg:flex flex-row-reverse mt-16 shadow-md rounded-2xl">
            <div className="bg-white w-[270px] rounded-tr-2xl rounded-br-2xl"></div>

            <form
              onSubmit={handleSubmit}
              class="p-8    bg-white  lg:rounded-bl-2xl lg:w-[440px] w-[366px] "
            >
              <div className="pl-20">
                <img src={logo} className="w-20 flex " alt="aims logo" />
              </div>
              {error.message && (
                <div className="mt-4 mb-4">
                  <span className="text-danger text-sm">{error.message}</span>
                </div>
              )}
              <div class="mb-4 pt-4">
                <input
                  class="pl-[14px] text-sm py-2 mb-4 w-full border-2 border-gray-400 rounded   flex justify-between  py-2"
                  type="text"
                  placeholder="Email Address or phone number"
                  value={email}
                  onChange={onChangeEmail}
                />
              </div>
              <div class="mb-4 text-sm  rounded border-2 border-gray-400 flex justify-between  py-2">
                <input
                  type={passwordType}
                  name="password"
                  class="border-none outline-none  ml-4"
                  placeholder="Password"
                  value={password}
                  onChange={onChangePassword}
                />

                <button className="mr-4 " onClick={togglePassword}>
                  {passwordType === "password" ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <div class="">
                <button
                  class=" w-full bg-[#135e67] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Sign in"}
                </button>
                <div className="flex justify-around">
                  <Link
                    to="/forgot_password"
                    className="mt-4 text-sm hover:text-[#078ECE]"
                  >
                    Forgot Password
                  </Link>
                </div>
              </div>
            </form>

            <div className="lg:w-[500px] nav">
              <div className=" lg:w-[300px] flex justify-center items-center lg:pl-72">
                <h1 className="lg:pl-28 pl-12 text-white font-bold lg:text-2xl text-xl lg:p-0 p-8 ">
                  MINECOFIN Feedback
                  <span className=" font-bold pl-1">Analysis</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-16">
          <div className="flex justify-center pt-4 pb-8 bg-gray-200">
            <div>
              <h6 className="text-black-400 pr-1">Powered by </h6>
            </div>
            <div>
              <h6 className="text-green-400 pr-1">Huzalabs</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Minecofin;
