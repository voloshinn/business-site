import React, { useEffect, useState } from "react";
import "./Feedback.css";
import { toast } from "react-toastify";

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

  const submitData = (e) => {
    e.preventDefault();
    fetch("https://mehiko-motors.duckdns.org/api/telegram", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, surname, phoneNumber, commentary }),
    })
      .then((response) => response.json())
      .then((result) => toast.success(result.message));
  };

  return (
    <div className="feedback-wrapper">
      <h2 id="feedback" className="title">
        Оставьте заявку.
      </h2>
      <span className="feedback-subtitle">
        Заполните форму и получите бесплатный выезд и коммерческое предложение.
      </span>
      <div className="feedback-form">
        <form action="">
          <input
            type="text"
            id="name"
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
            value={commentary}
            style={{
              border: hasCommentaryError ? "1px solid red" : null,
            }}
            onChange={handleChange}
            placeholder="Комментарий"
          />{" "}
          <br />
          <div className="btn-wrapper">
            <button id="submit" disabled={formNotValid} onClick={submitData}>
              Отправить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
