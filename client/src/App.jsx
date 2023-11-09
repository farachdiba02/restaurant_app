import { useState } from "react";
import Navbar from "./components/Navbar";

import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      {/* Navigation Bar */}
      <Navbar />

      {/* End Of Navbar */}

      {/* <!-- Cards --> */}
      <Card />

      {/* <!-- End Of Cards --> */}

      {/* Detail Page */}
      <div class="mx-auto p-4">
        <div class="max-w-3xl mx-auto bg-white p-8 rounded shadow">
          <h2 class="text-2xl font-bold mb-4">Bakso</h2>
          <div class="flex justify-between mb-4">
            <div class="flex items-center">
              <span class="text-gray-600 mr-2">#1</span>
              <span class="text-gray-600 mr-2">Category: Food</span>
            </div>
            <span class="text-gray-600">Price: $20.00</span>
          </div>
          <img
            src="https://www.indonesia.travel/content/dam/indtravelrevamp/en/trip-ideas/the-ultimate-guide-to-must-try-indonesian-food/bakso.jpg"
            class="w-full object-cover mb-4"
            alt="Bakso Image"
          />
          <p class="mb-4">Description: Bakso Bulat</p>
          <p class="mb-4">Author: test@mail.com</p>
          <div class="mt-5">
            <button
              type="submit"
              class="borde-2 border-rose-300 bg-rose-500 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-rose-500 font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
