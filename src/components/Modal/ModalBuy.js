import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleBuyModal, toggleSuccess } from "../../store/actions";
import "./Modal.css";

export const ModalBuy = () => {
  const dispatch = useDispatch();
  const inputsValidStatus = {
      name: false,
      surname: false,
      passport: false,
      email: false,
      phone: false
  };

  useEffect(() => {
    const inputs = document.querySelectorAll('.modal__input');
    inputs.forEach(input => {
      input.addEventListener('blur', validator);
      input.addEventListener('change', removeInvalid);
    })

    return function removeEvents() {
      inputs.forEach(input => {
        input.removeEventListener('blur', validator);
        input.removeEventListener('change', removeInvalid);
      })
    };
  }, [])
  
  function handleModal() {
    dispatch(toggleBuyModal());
  }

  function handleSuccsess(e) {
    e.preventDefault();

    if(Object.values(inputsValidStatus).some(value => !value)){
      console.log('some input invalid');
    } else {
      dispatch(toggleSuccess());
    }
  }  

  function validator(e) {
    const nameRegExp = /[А-Я]{1}[а-я]{1,}/;
    const passportRegExp = /[А-Я]{2}\d{6}/;
    const emailRegExp = /[0-9a-z_A-Z]+@[0-9a-z_A-Z^.]+\.[a-zA-Z]{2,4}/;
    const phoneRegExp = /[0-9]{10,}/;

    const currentInput = e.target;
    const inputName = currentInput.id;
    const inputValue = currentInput.value;

    let currentRegExp = null;

    switch (inputName) {
      case 'name':
      case 'surname':
        currentRegExp = nameRegExp;
        break;

      case 'passport':
        currentRegExp = passportRegExp;
        break;

      case 'email':
        currentRegExp = emailRegExp;
        break;

      case 'phone':
        currentRegExp = phoneRegExp;
        break;

      default:
        return;
    }
  
    if (!currentRegExp.test(String(inputValue))) {
      currentInput.classList.add('invalid');
      inputsValidStatus[inputName] = false;
    } else {
      currentInput.classList.add('valid');
      inputsValidStatus[inputName] = true;
    }
  }

  function removeInvalid(e) {
    e.target.classList.remove('invalid');
  }

  return (
    <div className="modal-container position-fixed top-0 bottom-0 start-0 end-0 pt-5">
      <form
        method="POST"
        action="#"
        className="modal__form d-flex flex-column m-auto"
      >
        <h2 className="modal__title">Покупка билета</h2>
        <label htmlFor="name" className="modal__label form-label pt-3">
          <h3 className="modal__input-title fs-6">Имя</h3>

          <input
            className="modal__input form-control rounded"
            type="text"
            id="name"
            placeholder="Имя с большой буквы"
            required
          ></input>
        </label>

        <label htmlFor="surname" className="modal__label form-label pt-3">
          <h3 className="modal__input-title fs-6">Фамилия</h3>

          <input
            className="modal__input form-control rounded"
            type="text"
            id="surname"
            placeholder="Фамилия с большой буквы"
            required
          ></input>
        </label>

        <label htmlFor="passport" className="modal__label form-label pt-3">
          <h3 className="modal__input-title fs-6">Серия, номер паспорта</h3>

          <input
            className="modal__input form-control rounded"
            type="text"
            id="passport"
            placeholder="АА123456"
            required
          ></input>
        </label>

        <label htmlFor="email" className="modal__label form-label pt-3">
          <h3 className="modal__input-title fs-6">Электронная почта</h3>

          <input
            className="modal__input form-control rounded"
            type="email"
            id="email"
            placeholder="example@mail.com"
            required
          ></input>
        </label>

        <label htmlFor="phone" className="modal__label form-label pt-3">
          <h3 className="modal__input-title fs-6">Телефон</h3>

          <input
            className="modal__input form-control rounded"
            type="text"
            id="phone"
            placeholder="Минимум 10 цифр"
            required
          ></input>
        </label>

        <div className="modal__buttons d-flex justify-content-around pt-3">
          <input
            type="submit"
            className="modal__button btn btn-warning ml-3 py-3 px-5"
            value="Купить"
            onClick={handleSuccsess}
          />

          <button
            className="modal__button btn btn-secondary py-3 px-4"
            onClick={handleModal}
          >
            Отменить
          </button>
        </div>
      </form>
    </div>
  );
};
