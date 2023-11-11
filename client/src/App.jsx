import { useState } from "react";
import Navbar from "./components/Navbar";

import "./App.css";
import Card from "./components/Card";
import Detail from "./components/Detail";

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
      <Detail />
    </>
  );
}

export default App;
