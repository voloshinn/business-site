import React, { useEffect, useState } from "react";
import "./Feedback.css";
import TelegramFormHandler from "./TelegramFormHandler";

export default function Feedback() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [commentary, setCommentary] = useState("");

  const [hasNameError, setHasNameError] = useState(false);
  const [hasSurnameError, setHasSurnameError] = useState(false);
  const [hasPhoneNumberError, setHasPhoneNumberError] = useState(false);
  const [hasCommentaryError, setHasCommentaryError] = useState(false);

  const [formNotValid, setFormNotValid] = useState(true);

  function handleChange(event) {
    console.log(event.target.value);
    if (event.target.id == "name") {
      setName(event.target.value);
      setHasNameError(event.target.value.trim().length === 0);
    } else if (event.target.id == "surname") {
      setSurname(event.target.value);
      setHasSurnameError(event.target.value.trim().length === 0);
    } else if (event.target.id == "phoneNumber") {
      setPhoneNumber(event.target.value);
      setHasPhoneNumberError(event.target.value.trim().length === 0);
    } else if (event.target.id == "commentary") {
      setCommentary(event.target.value);
      setHasCommentaryError(event.target.value.trim().length === 0);
    }
  }

  useEffect(() => {
    if (
      hasNameError ||
      hasSurnameError ||
      hasPhoneNumberError ||
      hasCommentaryError
    ) {
      setFormNotValid(true);
    } else {
      setFormNotValid(false);
    }
  }, [hasNameError, hasSurnameError, hasPhoneNumberError, hasCommentaryError]);

  return (
    <div className="feedback-wrapper">
      <h2 id="feedback" className="title">
        Оставьте заявку.
      </h2>
      <span className="feedback-subtitle">
        Заполните форму и получите бесплатный выезд и коммерческое предложение.
      </span>
      <div className="feedback-form">
        <form id="contact-form">
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            style={{
              border: hasNameError ? "1px solid red" : null,
            }}
            onChange={handleChange}
            placeholder="Имя"
          />{" "}
          <br />
          <input
            type="text"
            id="surname"
            name="surname"
            value={surname}
            style={{
              border: hasSurnameError ? "1px solid red" : null,
            }}
            onChange={handleChange}
            placeholder="Фамилия"
          />{" "}
          <br />
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={phoneNumber}
            style={{
              border: hasPhoneNumberError ? "1px solid red" : null,
            }}
            onChange={handleChange}
            placeholder="+7 (900) 000-00-00"
          />{" "}
          <br />
          <input
            type="text"
            id="commentary"
            name="commentary"
            value={commentary}
            style={{
              border: hasCommentaryError ? "1px solid red" : null,
            }}
            onChange={handleChange}
            placeholder="Комментарий"
          />
          <br />
          <div className="btn-wrapper">
            <button type="submit" id="submit-btn" disabled={formNotValid}>
              Отправить
            </button>
          </div>
        </form>
        <TelegramFormHandler />
      </div>
    </div>
  );
}
