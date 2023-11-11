import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import DetailCuisine from "./DetailCuisine";

const Detail = ({ id }) => {
  const BASE_URL = "http://localhost:3000";
  const [cuisine, setCuisine] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDetailCuisine = async (id) => {
    try {
      //   setLoading(true);
      const { data } = await axios.get(`${BASE_URL}/pub/cuisines/${id}`);
      setCuisine(data.data);
    } catch (error) {
      console.log(error.message);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDetailCuisine(id);
  }, []);

  if (loading) return <Loading />;

  if (error) return <p>Error fetching data, please try again later</p>;

  return (
    <>
      <div className="mx-auto p-4">
        <DetailCuisine item={cuisine} />;
      </div>
    </>
  );
};

export default Detail;
