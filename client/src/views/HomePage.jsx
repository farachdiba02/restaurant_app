import Card from "../components/Card";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import BASE_URL from "../../../cms/static";
const HomePage = () => {
  const [cuisines, setCuisines] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState(""); //buat key untuk query
  const [queryValue, setQueryValue] = useState(""); //buat value untuk query

  const handleOnChange = (e) => {
    setQuery(e.target.name);
    setQueryValue(e.target.value);
  };
  // console.log(query, queryValue);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    fetchData(`/?${query}=${queryValue}`);
  };
  const fetchData = async (query = "") => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${BASE_URL}/apis/pub/restaurant-app/cuisines${query}`
      );
      // console.log(data.data);
      setCuisines(data.data.query);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Navbar handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit} />
      <Card cuisines={cuisines} loading={loading} error={error} />
    </>
  );
};
export default HomePage;
