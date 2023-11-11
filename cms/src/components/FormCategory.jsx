import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormCategory = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  // console.log("masuk");
  const handleSubmit = async (e) => {
    e.preventDefault();

    const BASE_URL = "http://localhost:3000";
    try {
      const access_token = localStorage.getItem("access_token");
      const response = await axios.post(
        `${BASE_URL}/category`,
        { name },
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );
      navigate("/categories");
      // console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-rose-200">
      <div className="w-96 p-6 shadow-lg bg-white rounded-md">
        <h1 className="text-3xl block text-center font-semibold">
          Add New Category
        </h1>
        <hr className="mt-3" />
        <form onSubmit={handleSubmit}>
          <div className="mt-3">
            <label htmlFor="categoryName" className="block text-base mb-2">
              Category Name
            </label>
            <input
              type="text"
              id="categoryName"
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder="Enter Category Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mt-5">
            <button
              type="submit"
              className="border-2 border-rose-300 bg-rose-500 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-rose-500 font-semibold"
            >
              Add New Category
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormCategory;
