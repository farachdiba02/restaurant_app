import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
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
  // return JSON.stringify(category);

  return (
    <table class="table-auto bg-rose-200 w-full mx-auto">
      <thead class="text-center">
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody class="text-center">
        {/* loop disini */}
        {category.map((el) => (
          <tr key={el.id}>
            <td>{el.id}</td>
            <td>{el.name}</td>
            <td>
              <a href="edit-form">
                <i class="fa-regular fa-pen-to-square"></i>
              </a>
              <a href="delete-form">
                <i class="fa-regular fa-trash-can"></i>
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableCategory;
