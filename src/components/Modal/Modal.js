import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleModal } from '../../store/actions';
import "./Modal.css";

export const Modal = () => {
    const dispatch = useDispatch();
    const modalActive = useSelector(state => {
        return state.modalActive;
    });

    function handleModal () {
        dispatch(toggleModal());
    }

    return (
        modalActive &&
        <div className="modal-container position-fixed top-0 bottom-0 start-0 end-0 pt-5">
            <form method="POST" action="#" className="modal__form d-inline-block">
                <h2 className="modal__title">Покупка билета</h2>
                <label htmlFor="name" className="modal__label form-label pt-3">
                    <h3 className="modal__input-title fs-6">Имя</h3>

                    <input className="modal__input form-control rounded" type="text" id="name" pattern="" required></input>
                </label>

                <label htmlFor="surname" className="modal__label form-label pt-3">
                    <h3 className="modal__input-title fs-6">Фамилия</h3>

                    <input className="modal__input form-control rounded" type="text" id="surname" pattern="" required></input>
                </label>

                <label htmlFor="passport" className="modal__label form-label pt-3">
                    <h3 className="modal__input-title fs-6">Серия, номер паспорта</h3>

                    <input className="modal__input form-control rounded" type="text" id="passport" pattern="" required></input>
                </label>

                <label htmlFor="email" className="modal__label form-label pt-3">
                    <h3 className="modal__input-title fs-6">Электронная почта</h3>

                    <input className="modal__input form-control rounded" type="email" id="email" pattern="" required></input>
                </label>

                <label htmlFor="telephone" className="modal__label form-label pt-3">
                    <h3 className="modal__input-title fs-6">Телефон</h3>

                    <input className="modal__input form-control rounded" type="text" id="telephone" pattern="" required></input>
                </label>

                <div className="modal__buttons d-flex justify-content-around pt-3">
                    <input type="submit" className="modal__button btn btn-warning ml-3" value="Купить"/>

                    <button className="modal__button btn btn-secondary" onClick={handleModal}>
                        Отменить
                    </button>
                </div>
            </form>
        </div>
    )
}