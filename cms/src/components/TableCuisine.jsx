import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const TableCuisine = () => {
  const BASE_URL = "http://localhost:3000";
  const navigate = useNavigate();
  const [cuisines, setCuisines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchCuisines = async () => {
    try {
      const access_token = localStorage.getItem("access_token");
      // setLoading(true);

      const { data } = await axios.get(`${BASE_URL}/cuisines`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      setCuisines(data.data);
      // console.log(data.data);
    } catch (error) {
      // console.log(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCuisines();
  }, []);
  const handleEditClick = (id) => {
    navigate(`/edit-cuisine/${id}`);
  };
  return (
    <table className="table-auto bg-rose-200 w-full mx-auto">
      <thead className="text-center">
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Image</th>
          <th>Category</th>
          <th>Author</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody className="text-center">
        {cuisines.map((cuisine, index) => {
          return (
            <tr key={cuisine.id}>
              <td>{index + 1}</td>
              <td>{cuisine.name}</td>
              <td>{cuisine.description}</td>
              <td>{cuisine.price}</td>
              <td>
                <img src={cuisine.imgUrl} className="w-16 object-cover" />
              </td>
              <td>{cuisine.Category.name}</td>
              <td>{cuisine.User.username}</td>
              <td>
                <Link onClick={() => handleEditClick(cuisine.id)}>
                  <i className="fa-regular fa-pen-to-square"></i>
                </Link>
                <a href="delete-form">
                  <i className="fa-regular fa-trash-can"></i>
                </a>
                <a href="upload-img">
                  <i className="fa-regular fa-image"></i>
                </a>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableCuisine;
