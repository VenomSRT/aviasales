import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleSuccess } from '../../store/actions';
import "./Modal.css";

export const ModalSuccess = () => {
    const dispatch = useDispatch();

    function handleSuccsess () {
        dispatch(toggleSuccess())
    }

    return (
        <div className="modal-container position-fixed top-0 bottom-0 start-0 end-0 pt-5">
            <div className="success d-flex flex-column m-auto">
                <h3 className="success__title">
                    Покупка успешная
                </h3>
                <button className="success__button btn btn-warning ml-3 py-3 px-5" onClick={handleSuccsess}>OK</button>
            </div> 
        </div>
    )

}