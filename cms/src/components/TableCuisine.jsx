import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BASE_URL from "../../static";
const TableCuisine = () => {
  const navigate = useNavigate();
  const [cuisines, setCuisines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchCuisines = async () => {
    try {
      const access_token = localStorage.getItem("access_token");
      // setLoading(true);
      console.log(access_token);

      const { data } = await axios.get(
        `${BASE_URL}/apis/restaurant-app/cuisines`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );
      // console.log(data.data, "inii");
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

  const handleDeleteCuisine = async (cuisineId) => {
    try {
      const access_token = localStorage.getItem("access_token");
      await axios.delete(
        `${BASE_URL}/apis/restaurant-app/cuisines/${cuisineId}`,
        {
          headers: {
            authorization: `Bearer ${access_token}`,
          },
        }
      );
      const { data } = await axios.get(
        `${BASE_URL}/apis/restaurant-app/cuisines`,
        {
          headers: {
            authorization: `Bearer ${access_token}`,
          },
        }
      );
      // console.log(data.data.data);
      setCuisines(data.data);
      // console.log(data);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
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
              <td>{cuisine.category}</td>
              <td>{cuisine.User.username}</td>
              <td>
                <Link onClick={() => handleEditClick(cuisine.id)}>
                  <i className="fa-regular fa-pen-to-square"></i>
                </Link>
                <Link onClick={() => handleDeleteCuisine(cuisine.id)}>
                  <i className="fa-regular fa-trash-can"></i>
                </Link>
                {/* <a href="delete-form">
                  <i className="fa-regular fa-trash-can"></i>
                </a> */}
                <Link to={`/form-img/${cuisine.id}`}>
                  <i className="fa-regular fa-image"></i>{" "}
                </Link>
                {/* <a href="upload-img">
                  <i className="fa-regular fa-image"></i>
                </a> */}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableCuisine;
