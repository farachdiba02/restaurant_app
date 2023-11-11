import { NavLink } from "react-router-dom";
const NavigationBar = () => {
  return (
    <nav className="bg-rose-400 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="text-white font-bold text-xl">
            Restaurant App
          </a>
        </div>
        <div className="flex items-center">
          <NavLink className="text-white mr-4" to="/categories">
            Food Category
          </NavLink>
          <NavLink className="text-white mr-4" to="/add-cuisines">
            Add Cuisine
          </NavLink>
          {/* <a href="#" className="text-white mr-4">
            Add Category
          </a> */}
          <NavLink className="text-white mr-4" to="/add-category">
            Add Category
          </NavLink>
          {/* <a href="#" className="text-white mr-4">
            Add Category
          </a> */}
          <a href="#" className="text-white mr-4">
            Add User
          </a>
          <a href="#" className="text-white">
            Logout
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
