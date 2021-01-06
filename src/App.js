import React, { useState, useEffect } from "react";
import { Filter } from "./components/Filter/Filter";
import { Tickets } from "./components/Tickets/Tickets";
import { getData } from "./api/api";
import logo from "./images/main-logo.png";
import "./main.css";

function App() {
  const [tickets, setTickets] = useState([]);
  const [currency, setCurrency] = useState('RUB');

  useEffect(() => {
    getData()
      .then(data => {
        let sortedByPrice = data.sort((ticket1, ticket2) => ticket1.price - ticket2.price);

        sortedByPrice.forEach((element, i) => {
          element.id = i;
        });

        setTickets(sortedByPrice);
      })
  }, []);

  return (
    <div className="content container">
      <div className="header text-center py-3">
        <a href="#" className="header__image-link justify-content-center">
          <img
            className="header__image"
            src={logo}
            alt="main logo"
          />
        </a>
      </div>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          some text
        </div>
      </div>
      

      <div className="main row justify-content-center">
        <Filter />
  
        <Tickets tickets={tickets} />
      </div>
    </div>
  );
}

export default App;
