import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Detail from "../components/Detail";

const DetailPage = () => {
  const { id } = useParams();

  useEffect(() => console.log(id), []);
  return <Detail id={id} />;
};

export default DetailPage;
