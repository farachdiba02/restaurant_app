import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CardCuisine from "./CardCuisine";
import Loading from "./Loading";
const Card = ({ cuisines, loading, error }) => {
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
