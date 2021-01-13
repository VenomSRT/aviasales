import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleBuyModal, toggleSuccess } from '../../store/actions';
import "./Modal.css";

export const ModalBuy = () => {
    const dispatch = useDispatch();

    function handleModal () {
        dispatch(toggleBuyModal());
    }

    function handleSuccsess (e) {
        console.log(e);
        e.preventDefault();
        dispatch(toggleSuccess())
    }

    return (
        <div className="modal-container position-fixed top-0 bottom-0 start-0 end-0 pt-5">
            <form method="POST" action="#" className="modal__form d-flex flex-column m-auto">
                <h2 className="modal__title">Покупка билета</h2>
                <label htmlFor="name" className="modal__label form-label pt-3">
                    <h3 className="modal__input-title fs-6">Имя</h3>

                    <input className="modal__input form-control rounded" type="text" id="name" pattern="[А-Я]{1}[а-я]{1,}" placeholder="Имя с большой буквы" required></input>
                </label>

                <label htmlFor="surname" className="modal__label form-label pt-3">
                    <h3 className="modal__input-title fs-6">Фамилия</h3>

                    <input className="modal__input form-control rounded" type="text" id="surname" pattern="[А-Я]{1}[а-я]{1,}" placeholder="Фамилия с большой буквы" required></input>
                </label>

                <label htmlFor="passport" className="modal__label form-label pt-3">
                    <h3 className="modal__input-title fs-6">Серия, номер паспорта</h3>

                    <input className="modal__input form-control rounded" type="text" id="passport" pattern="[А-Я]{2}\d{6}" placeholder="АА123456" required></input>
                </label>

                <label htmlFor="email" className="modal__label form-label pt-3">
                    <h3 className="modal__input-title fs-6">Электронная почта</h3>

                    <input className="modal__input form-control rounded" type="email" id="email" pattern="[0-9a-z_A-Z]+@[0-9a-z_A-Z^.]+\.[a-zA-Z]{2,4}" placeholder="example@mail.com" required></input>
                </label>

                <label htmlFor="telephone" className="modal__label form-label pt-3">
                    <h3 className="modal__input-title fs-6">Телефон</h3>

                    <input className="modal__input form-control rounded" type="text" id="telephone" pattern="[0-9]{10,}" placeholder="Минимум 10 цифр" required></input>
                </label>

                <div className="modal__buttons d-flex justify-content-around pt-3">
                    <input type="submit" className="modal__button btn btn-warning ml-3 py-3 px-5" value="Купить" onClick={handleSuccsess} />

                    <button className="modal__button btn btn-secondary py-3 px-4" onClick={handleModal}>
                        Отменить
                    </button>
                </div>
            </form>
        </div>
    )
}