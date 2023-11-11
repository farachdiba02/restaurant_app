import { NavLink } from "react-router-dom";

const DetailCuisine = ({ item }) => {
  return (
    <div className="mx-auto p-4">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">{item.name}</h2>
        <div className="flex justify-between mb-4">
          <div className="flex items-center">
            <span className="text-gray-600 mr-2">{item.id}</span>
            <span className="text-gray-600 mr-2">
              Category: {item.Category.name}
            </span>
          </div>
          <span className="text-gray-600">Price: {item.price}</span>
        </div>
        <img
          src={item.imgUrl}
          className="w-full object-cover mb-4"
          alt="Bakso Image"
        />
        <p className="mb-4">Description: {item.description}</p>
        <p className="mb-4">Author: {item.User.username}</p>
        <div className="mt-5">
          <NavLink to="/">
            <button
              type="submit"
              className="borde-2 border-rose-300 bg-rose-500 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-rose-500 font-semibold"
            >
              Close
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default DetailCuisine;
