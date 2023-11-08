const Navbar = () => {
  return (
    <nav className="bg-rose-500 p-4 flex justify-between items-center">
      {/* <!-- Logo or Branding (You can replace this with your own logo) --> */}
      <div className="text-white font-bold text-xl">Restaurant App</div>

      {/* <!-- Navigation Links --> */}
      <div className="space-x-4">
        <a href="#" className="text-white">
          Cuisines
        </a>
      </div>

      {/* <!-- Search Bar --> */}
      <div className="flex items-center">
        <input
          type="text"
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-rose-500 mr-2"
          placeholder="Search..."
        />
        <button className="ml-2 p-2 bg-rose-500 text-white rounded-full">
          <i className="fas fa-search"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
