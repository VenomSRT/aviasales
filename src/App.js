import React, { useState, useEffect } from "react";
import { Filter } from "./components/Filter/Filter";
import { Tickets } from "./components/Tickets/Tickets";
import { getData } from "./api/api";

function App() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    getData()
      .then(data => console.log(data))
  }, []);

  return (
    <main className="main">
      <div className="image-container">
        <a href="#" className="image-container__link">
          <img
            className="image-container__image"
            src="./aviasales/src/images/airline.png"
            alt="main logo"
          />
        </a>
      </div>

      <Filter />

      <Tickets tickets={tickets}/>
    </main>
  );
}

export default App;
