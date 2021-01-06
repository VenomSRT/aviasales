import React, { useState, useEffect } from "react";
import { store } from "./store/store";
import { connect } from 'react-redux';
import { loadTickets, loadTicketsSuccess, loadTicketsError } from './store/actions';
import { Filter } from "./components/Filter/Filter";
import { Tickets } from "./components/Tickets/Tickets";
import logo from "./images/main-logo.png";
import "./main.css";

function App(props) {
  const [currency, setCurrency] = useState('RUB');

  useEffect(() => {
    console.log(props);
    props.loadTickets();
    console.log(props.tickets);
  }, [props]);

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
  
        <Tickets tickets={props.tickets} />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tickets: state.tickets,
  }
};

const mapDispatchToProps = { loadTickets, loadTicketsSuccess, loadTicketsError };

export default connect(mapStateToProps, mapDispatchToProps)(App);
