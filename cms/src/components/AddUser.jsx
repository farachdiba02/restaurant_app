import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./ReuseableButton";

const AddUser = () => {
  const BASE_URL = "http://localhost:3000";
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const access_token = localStorage.getItem("access_token");
      const { data } = await axios.post(
        `${BASE_URL}/add-user`,
        {
          username,
          email,
          password,
          phoneNumber,
          address,
        },
        {
          headers: {
            authorization: `Bearer ${access_token}`,
          },
        }
      );
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    // Add User
    <div className="flex justify-center items-center h-screen bg-rose-200">
      <div className="w-96 p-6 shadow-lg bg-white rounded-md">
        <h1 className="text-3xl block text-center font-semibold">
          <i className="fa-solid fa-user"></i> Add New User
        </h1>
        <form onSubmit={handleSubmit}>
          <hr className="mt-3" />
          <div className="mt-3">
            <label htmlFor="username" className="block text-base mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mt-3">
            <label htmlFor="email" className="block text-base mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder="Enter Email"
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
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mt-3">
            <label htmlFor="phoneNumber" className="block text-base mb-2">
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder="Enter Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="mt-3">
            <label htmlFor="address" className="block text-base mb-2">
              Address
            </label>
            <input
              type="text"
              id="address"
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder="Enter Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="mt-5">
            <Button
              type="submit"
              className="borde-2 border-rose-300 bg-rose-500 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-rose-500 font-semibold"
              label="Add New User"
            />
            {/* <button
              type="submit"
              className="borde-2 border-rose-300 bg-rose-500 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-rose-500 font-semibold"
            >
              Add New User
            </button> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
