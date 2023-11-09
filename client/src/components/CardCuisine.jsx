import { useState } from "react";
const CardCuisine = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Bakso",
      description: "Bakso bulat",
      price: 20000,
      imgUrl:
        "https://www.indonesia.travel/content/dam/indtravelrevamp/en/trip-ideas/the-ultimate-guide-to-must-try-indonesian-food/bakso.jpg",
    },
    {
      id: 2,
      name: "Bakso",
      description: "Bakso bulat",
      price: 20000,
      imgUrl:
        "https://www.indonesia.travel/content/dam/indtravelrevamp/en/trip-ideas/the-ultimate-guide-to-must-try-indonesian-food/bakso.jpg",
    },
    {
      id: 3,
      name: "Bakso",
      description: "Bakso bulat",
      price: 20000,
      imgUrl:
        "https://www.indonesia.travel/content/dam/indtravelrevamp/en/trip-ideas/the-ultimate-guide-to-must-try-indonesian-food/bakso.jpg",
    },
    {
      id: 4,
      name: "Bakso",
      description: "Bakso bulat",
      price: 20000,
      imgUrl:
        "https://www.indonesia.travel/content/dam/indtravelrevamp/en/trip-ideas/the-ultimate-guide-to-must-try-indonesian-food/bakso.jpg",
    },
    {
      id: 5,
      name: "Bakso",
      description: "Bakso bulat",
      price: 20000,
      imgUrl:
        "https://www.indonesia.travel/content/dam/indtravelrevamp/en/trip-ideas/the-ultimate-guide-to-must-try-indonesian-food/bakso.jpg",
    },
    {
      id: 6,
      name: "Bakso",
      description: "Bakso bulat",
      price: 20000,
      imgUrl:
        "https://www.indonesia.travel/content/dam/indtravelrevamp/en/trip-ideas/the-ultimate-guide-to-must-try-indonesian-food/bakso.jpg",
    },
    {
      id: 7,
      name: "Bakso",
      description: "Bakso bulat",
      price: 20000,
      imgUrl:
        "https://www.indonesia.travel/content/dam/indtravelrevamp/en/trip-ideas/the-ultimate-guide-to-must-try-indonesian-food/bakso.jpg",
    },
    {
      id: 8,
      name: "bakso",
      description: "Bakso bulat",
      price: 20000,
      imgUrl:
        "https://www.indonesia.travel/content/dam/indtravelrevamp/en/trip-ideas/the-ultimate-guide-to-must-try-indonesian-food/bakso.jpg",
    },
  ]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data.map((el) => (
        <div
          key={el.id}
          className="max-w-sm rounded overflow-hidden shadow-lg mt-3 ml-4 mr-4 mb-4"
        >
          <img className="w-full" src={el.imgUrl} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{el.name}</div>
            <p className="text-gray-700 text-base">{el.description}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <button
              type="submit"
              className="inline-block bg-rose-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              Show Detail
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardCuisine;
