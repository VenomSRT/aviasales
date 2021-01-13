import React, { useEffect } from "react";
import { ModalBuy } from "./components/Modal/ModalBuy";
import { ModalSuccess } from "./components/Modal/ModalSuccess";
import { Filter } from "./components/Filter/Filter";
import { Tickets } from "./components/Tickets/Tickets";
import { useDispatch, useSelector } from 'react-redux';
import { loadTickets } from './store/actions';
import logo from "./images/main-logo.png";
import "./main.css";

function App(props) {
  const dispatch = useDispatch();
  const modalBuyActive = useSelector(state => {
    return state.modalBuyActive;
  });
  const modalSuccess = useSelector(state => {
    return state.modalSuccess;
  });

  /* useEffect(() => {
    const bodyStyle = document.body.style;

    if(modalSuccess || modalBuyActive) {
      bodyStyle.overflowY = 'hidden';
      bodyStyle.paddingRight = '15px';
    } else {
      bodyStyle.overflowY = 'auto';
      bodyStyle.paddingRight = '0';
    }
  }, [modalBuyActive, modalSuccess]) */

  useEffect(() => {
      dispatch(loadTickets());
  }, []);

  return (
    <>
      {modalBuyActive && <ModalBuy />}

      {modalSuccess && <ModalSuccess />}

      <div className="content container">
        <div className="header text-center py-3">
          <a href="#" className="header__image-link justify-content-center">
            <img className="header__image" src={logo} alt="main logo" />
          </a>
        </div>

        <div className="main row justify-content-center">
          <Filter />

          <Tickets tickets={props.tickets} />
        </div>
      </div>
    </>
  );
}

export default App;
