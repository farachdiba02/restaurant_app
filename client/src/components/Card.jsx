import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CardCuisine from "./CardCuisine";
import Loading from "./Loading";
import axios from "axios";
const Card = () => {
  const BASE_URL = "http://localhost:3000";
  const [cuisines, setCuisines] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${BASE_URL}/pub/cuisines`);
      // console.log(data.data);
      setCuisines(data.data);
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

  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/detail/${id}`);
  };

  if (loading) return <Loading />;
  if (error) return <p>Error fetching data, please try again later</p>;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cuisines.map((el) => {
          return (
            <CardCuisine item={el} key={el.id} handleClick={handleClick} />
          );
        })}
      </div>
    </>
  );
};

export default Card;
