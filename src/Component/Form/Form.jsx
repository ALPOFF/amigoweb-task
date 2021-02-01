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

  let validEmail = (email) => {
    let regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setCorrectStatus({
      ...correctStatus,
      emailStatus: regExp.test(email),
    });
  };

  let validPhone = (phone) => {
    let regExp = /^\+?(?:[()-]*\d){11}[()-]*$/;
    setCorrectStatus({ ...correctStatus, phoneStatus: regExp.test(phone) });
  };

  let validName = (name) => {
    let regExp = /^[А-Яа-яA-Za-z_ \-]+$/;
    setCorrectStatus({ ...correctStatus, nameStatus: regExp.test(name) });
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
      <form>
        <label for="name">Имя</label>
        <input
          id="name"
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

        <label for="email">Email</label>
        <input
          id="email"
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

        <label for="phone">Номер телефона</label>
        <input
          id="phone"
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

        <label style={{ paddingTop: 30 }} for="language">
          Язык
        </label>
        <Dropdown getCurrentLang={getCurrentLang} />
      </form>
      <span className="rules">
        <input
          id="rules"
          type="checkbox"
          className="custom-checkbox"
          id="happy"
          name="happy"
          value="yes"
          onChange={() => setRules(!rulesSt)}
        />
        <label htmlFor="rules"></label>
        <span>
          Принимаю <a href=""> условия </a> использования
        </span>
      </span>

      <button disabled={!(langSt && rulesSt)}>Зарегистрироваться</button>
    </div>
  );
};

export default Form;
