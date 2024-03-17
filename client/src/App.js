import React from "react";
import "./Styles/App.scss";
import Header from "./Components/Common/Header";
import Sidebar from "./Components/Common/Sidebar";
import Footer from "./Components/Common/Footer";
import Dashboard from "./Components/Dashboard/Dashboard";
import Logbook from "./Components/Logbook/Logbook";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Footer />

      <main>
        <Logbook />
      </main>
    </div>
  );
};

export default App;
