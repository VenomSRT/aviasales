import React, { useState, useEffect } from "react";
import { Filter } from "./components/Filter/Filter";
import { Tickets } from "./components/Tickets/Tickets";
import { getData } from "./api/api";
import logo from "./images/main-logo.png";
import "./main.css";

function App() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    getData()
      .then(data => setTickets(data))}
  , []);

  return (
    <main className="main container">
      <div className="image-container text-center py-3">
        <a href="#" className="image-container__link justify-content-center">
          <img
            className="image-container__image"
            src={logo}
            alt="main logo"
          />
        </a>
      </div>

      <div class="row justify-content-center">
        <Filter />
  
        <Tickets tickets={tickets} />
      </div>
    </main>
  );
}

export default App;
