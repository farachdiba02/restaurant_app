const AddUser = () => {
  return (
    // Add User
    <div class="flex justify-center items-center h-screen bg-rose-200">
      <div class="w-96 p-6 shadow-lg bg-white rounded-md">
        <h1 class="text-3xl block text-center font-semibold">
          <i class="fa-solid fa-user"></i> Add New User
        </h1>
        <hr class="mt-3" />
        <div class="mt-3">
          <label for="username" class="block text-base mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
            placeholder="Enter Username"
          />
        </div>
        <div class="mt-3">
          <label for="email" class="block text-base mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
            placeholder="Enter Email"
          />
        </div>
        <div class="mt-3">
          <label for="password" class="block text-base mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
            placeholder="Enter Password"
          />
        </div>
        <div class="mt-3">
          <label for="phoneNumber" class="block text-base mb-2">
            Phone Number
          </label>
          <input
            type="text"
            id="phoneNumber"
            class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
            placeholder="Enter Phone Number"
          />
        </div>
        <div class="mt-3">
          <label for="address" class="block text-base mb-2">
            Address
          </label>
          <input
            type="text"
            id="address"
            class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
            placeholder="Enter Address"
          />
        </div>
        <div class="mt-5">
          <button
            type="submit"
            class="borde-2 border-rose-300 bg-rose-500 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-rose-500 font-semibold"
          >
            Add New User
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
