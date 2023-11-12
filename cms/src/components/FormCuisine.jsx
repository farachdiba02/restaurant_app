import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const FormCuisine = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [imgUrl, setImgUrl] = useState("");
  const [categoryId, setCategoryId] = useState("");
  // const [authorId, setAuthorId] = useState("");
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  // console.log(name, "<<<name");
  // console.log(description, "<<<descrition");
  // console.log(price, "<<<price");
  // console.log(imgUrl, "<<<imgUrl");
  // console.log(categoryId, "<<<categoryId");
  // console.log(authorId, "<<<authorId");
  useEffect(() => {
    const BASE_URL = "http://localhost:3000";
    const fetchCategories = async () => {
      try {
        const access_token = localStorage.getItem("access_token");
        const { data } = await axios.get(`${BASE_URL}/category`, {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        });
        setCategories(data.data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const BASE_URL = "http://localhost:3000";
    try {
      const authorId = localStorage.getItem("authorId");
      const access_token = localStorage.getItem("access_token");
      const response = await axios.post(
        `${BASE_URL}/cuisines`,
        {
          name,
          description,
          price,
          imgUrl,
          categoryId,
          authorId,
        },
        {
          headers: {
            Authorization: `Bearer ${access_token} `,
          },
        }
      );
      navigate("/home");
      // console.log(response, "<<<Response");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen bg-rose-200">
      <div className="w-96 p-6 shadow-lg bg-white rounded-md">
        <h1 className="text-3xl block text-center font-semibold">
          Add New Cuisine
        </h1>
        <hr className="mt-3" />
        <form onSubmit={handleSubmit}>
          <div className="mt-3">
            <label htmlFor="cuisineName" className="block text-base mb-2">
              Cuisine Name
            </label>
            <input
              type="text"
              id="cuisineName"
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder="Enter Cuisine Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mt-3">
            <label
              htmlFor="cuisineDescription"
              className="block text-base mb-2"
            >
              Description
            </label>
            <input
              type="text"
              id="cuisineDescription"
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder="Enter Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mt-3">
            <label htmlFor="cuisinePrice" className="block text-base mb-2">
              Price
            </label>
            <input
              type="number"
              id="cuisinePrice"
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder="Enter Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mt-3">
            <label htmlFor="imageUrl" className="block text-base mb-2">
              Image URL
            </label>
            <input
              type="text"
              id="imageUrl"
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder="Enter Image URL"
              value={imgUrl}
              onChange={(e) => setImgUrl(e.target.value)}
            />
          </div>
          <div className="mt-3">
            <label htmlFor="category" className="block text-base mb-2">
              Category
            </label>
            <select
              id="category"
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
              defaultValue=""
            >
              <option value="" hidden disabled>
                Choose a category
              </option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
              {/* <option value="category2">Korean</option>
              <option value="category2">Korean</option>
            <option value="category2">Korean</option> */}
              {/* <!-- Tambahkan pilihan kategori sesuai kebutuhan --> */}
            </select>
          </div>
          <div className="mt-3">
            <label htmlFor="authorId" className="block text-base mb-2">
              Author
            </label>
            {/* <input
              type="number"
              id="authorId"
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder="Enter Author username"
              value={authorId}
              onChange={(e) => setAuthorId(e.target.value)}
            /> */}
          </div>
          <div className="mt-5">
            <button
              type="submit"
              className="border-2 border-rose-300 bg-rose-500 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-rose-500 font-semibold"
            >
              Add New Cuisine
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormCuisine;
