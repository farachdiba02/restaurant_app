import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const TableCategory = () => {
  const BASE_URL = "http://localhost:3000";
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCategory = async () => {
    try {
      const access_token = localStorage.getItem("access_token");
      const { data } = await axios.get(`${BASE_URL}/category`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      setCategory(data.data);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCategory();
  }, []);
  const handleEditClick = (id) => {
    navigate(`/edit-category/${id}`);
  };
  const handleDeleteCategory = async (categoryId) => {
    try {
      const access_token = localStorage.getItem("access_token");
      await axios.delete(`${BASE_URL}/category/${categoryId}`, {
        headers: {
          authorization: `Bearer ${access_token}`,
        },
      });
      const { data } = await axios.get(`${BASE_URL}/category`, {
        headers: {
          authorization: `Bearer ${access_token}`,
        },
      });
      // console.log(data);s
      setCategory(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  // return JSON.stringify(category);

  return (
    <table className="table-auto bg-rose-200 w-full mx-auto">
      <thead className="text-center">
        <tr>
          <th>#</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody className="text-center">
        {/* loop disini */}
        {category.map((el) => (
          <tr key={el.id}>
            <td>{el.id}</td>
            <td>{el.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableCategory;
