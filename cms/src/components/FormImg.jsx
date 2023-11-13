import { useState } from "react";
import Button from "./ReuseableButton";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import BASE_URL from "../../static";
console.log(BASE_URL);
const FormImg = () => {
  const { id } = useParams();
  const [inputFile, setInputFile] = useState(null);
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    // console.log(e.target.files[0]);
    setInputFile(e.target.files[0]);
  };

  const handleOnSubmit = async (e) => {
    console.log("hehehe");
    e.preventDefault();
    try {
      const access_token = localStorage.getItem("access_token");
      let formData = new FormData();
      formData.append("imgUrl", inputFile);
      console.log(formData);
      console.log(inputFile);
      const response = await axios.patch(
        `${BASE_URL}/apis/restaurant-app/cuisines/${id}`,
        formData,
        {
          headers: {
            authorization: `Bearer ${access_token}`,
          },
        }
      );

      if (response.status === 200) {
        console.log("File upload successful");
        navigate("/home");
      } else {
        console.error("File upload failed. Status code:", response.status);
        // Handle the error accordingly
      }
    } catch (error) {
      console.log(error);
    }
  };

  //   console.log(inputFile);
  return (
    <form
      className="flex flex-col justify-center items-center h-screen bg-rose-200"
      onSubmit={handleOnSubmit}
    >
      <input
        type="file"
        className="file-input file-input-bordered w-full max-w-xs"
        onChange={handleOnChange}
      />
      <Button
        type="submit"
        className="borde-2 border-rose-300 bg-rose-500 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-rose-500 font-semibold"
        label="Submit"
      />
    </form>
  );
};

export default FormImg;
