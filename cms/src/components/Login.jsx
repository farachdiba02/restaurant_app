import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const BASE_URL = "http://localhost:3000";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}/login`, {
        email,
        password,
      });

      const access_token = response.data.access_token;
      //   console.log(response.data);
      // console.log(access_token, 20);
      localStorage.setItem("access_token", access_token);
      navigate("/home");
    } catch (error) {
      console.log(error, 24);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-rose-200">
      <div className="w-96 p-6 shadow-lg bg-white rounded-md">
        <h1 className="text-3xl block text-center font-semibold">
          <i className="fa-solid fa-user"></i>Login
        </h1>
        <hr className="mt-3" />
        <form onSubmit={handleLogin}>
          <div className="mt-3">
            <label htmlFor="email" className="block text-base mb-2">
              Email
            </label>
            <input
              type="text"
              id="email"
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mt-3">
            <label htmlFor="password" className="block text-base mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mt-5">
            <button
              type="submit"
              className="borde-2 border-rose-300 bg-rose-500 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-rose-500 font-semibold"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
