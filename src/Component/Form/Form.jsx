import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import "./Form.css";

const Form = () => {
  const [correctValue, setCorrectValue] = useState({
    emailValue: "",
    phoneValue: "",
    nameValue: "",
  });

  const [correctStatus, setCorrectStatus] = useState({
    emailStatus: false,
    phoneStatus: false,
    nameStatus: false,
  });

  const [langSt, setLangSt] = useState(false);
  const [rulesSt, setRules] = useState(false);

  let reg;

  let validEmail = (email) => {
    reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setCorrectStatus({
      ...correctStatus,
      emailStatus: reg.test(email),
    });
  };

  let validPhone = (phone) => {
    reg = /^\+?(?:[()-]*\d){11}[()-]*$/;
    setCorrectStatus({ ...correctStatus, phoneStatus: reg.test(phone) });
  };

  let validName = (name) => {
    reg = /^[А-Яа-яA-Za-z_ \-]+$/;
    setCorrectStatus({ ...correctStatus, nameStatus: reg.test(name) });
  };

  let getCurrentLang = (currentLang) => {
    return currentLang.lang !== undefined ? setLangSt(true) : setLangSt(false);
  };

  return (
    <div className="main_form">
      <div className="head">
        <h3>Регистрация</h3>
        <span>
          Уже есть аккаунт?
          <a href=""> Войти</a>
        </span>
      </div>

      <span
        className="error"
        style={{
          visibility:
            !correctStatus.nameStatus && !correctValue.nameValue == ""
              ? "visible"
              : "hidden",
        }}
      >
        Введено не корректное значение
      </span>

      <span>Имя</span>
      <input
        type="text"
        value={correctValue.nameValue}
        placeholder="Введите Ваше имя"
        onChange={(e) => {
          setCorrectValue({
            ...correctValue,
            nameValue: e.currentTarget.value,
          });
          validName(e.currentTarget.value);
        }}
      />
      <span
        className="error"
        style={{
          visibility:
            !correctStatus.emailStatus && !correctValue.emailValue == ""
              ? "visible"
              : "hidden",
        }}
      >
        Введено не корректное значение
      </span>
      <span>Email</span>
      <input
        type="text"
        value={correctValue.emailValue}
        placeholder="Введите ваш email"
        onChange={(e) => {
          setCorrectValue({
            ...correctValue,
            emailValue: e.currentTarget.value,
          });
          validEmail(e.currentTarget.value);
        }}
      />
      <span
        className="error"
        style={{
          visibility:
            !correctStatus.phoneStatus && !correctValue.phoneValue == ""
              ? "visible"
              : "hidden",
        }}
      >
        Введено не корректное значение
      </span>
      <span>Номер телефона</span>
      <input
        type="text"
        value={correctValue.phoneValue}
        placeholder="Введите номер телефона"
        onChange={(e) => {
          setCorrectValue({
            ...correctValue,
            phoneValue: e.currentTarget.value,
          });
          validPhone(e.currentTarget.value);
        }}
      />
      <span style={{ paddingTop: 30 }}>Язык</span>
      <Dropdown getCurrentLang={getCurrentLang} />

      <span className="rules">
        <input
          type="checkbox"
          className="custom-checkbox"
          id="happy"
          name="happy"
          value="yes"
          onChange={() => setRules(!rulesSt)}
        />
        <label htmlFor="happy"></label>
        <span>
          Принимаю <a href=""> условия </a> использования
        </span>
      </span>

      <button disabled={!(langSt && rulesSt)}>Зарегистрироваться</button>
    </div>
  );
};

export default Form;
