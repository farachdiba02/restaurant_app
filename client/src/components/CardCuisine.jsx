import { NavLink } from "react-router-dom";
const CardCuisine = ({ item }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mt-3 ml-4 mr-4 mb-4">
      <img className="w-full" src={item.imgUrl} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{item.name}</div>
        <p className="text-gray-700 text-base">{item.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <NavLink to={`/detail/${item.id}`}>
          <button
            type="submit"
            className="inline-block bg-rose-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            Show Detail
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default CardCuisine;
