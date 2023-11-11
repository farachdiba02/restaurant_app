import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
const EditCuisine = () => {
  const BASE_URL = "http://localhost:3000";
  const { id } = useParams();
  const [cuisineData, setCuisineData] = useState({});
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

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
      console.log(error);
    }
  };
  const fetchCuisine = async () => {
    try {
      const access_token = localStorage.getItem("access_token");
      //   console.log("ggcgjut");
      const { data } = await axios.get(`${BASE_URL}/cuisines/${id}`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      console.log(data, 24);
    } catch (error) {
      console.log(error, 26);
    }
  };
  useEffect(() => {
    fetchCuisine();
    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const access_token = localStorage.getItem("access_token");
      await axios.put(
        `${BASE_URL}/cuisines/${id}`,
        {
          name,
          description,
          price,
          imgUrl,
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
    <>
      <div className="flex justify-center items-center h-screen bg-rose-200">
        <div className="w-96 p-6 shadow-lg bg-white rounded-md">
          <h1 className="text-3xl block text-center font-semibold">
            Edit Cuisine
          </h1>
          <form onSubmit={handleSubmit}>
            <hr className="mt-3" />
            <div className="mt-3">
              <label for="cuisineName" className="block text-base mb-2">
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
              <label for="cuisineDescription" className="block text-base mb-2">
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
              <label for="cuisinePrice" className="block text-base mb-2">
                Price
              </label>
              <input
                type="text"
                id="cuisinePrice"
                className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                placeholder="Enter Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="mt-3">
              <label for="imageUrl" className="block text-base mb-2">
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
              <label for="category" className="block text-base mb-2">
                Category
              </label>
              <select
                id="category"
                className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
              >
                <option value="" hidden disabled>
                  Choose a category
                </option>
                {categories.map((category) => {
                  return (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="mt-5">
              <button
                type="submit"
                className="border-2 border-rose-300 bg-rose-500 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-rose-500 font-semibold"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditCuisine;
