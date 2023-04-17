import React, { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { useNavigate } from "react-router-dom";
import "./BankCard.css";
import { Button, Input } from "@mui/material";

export default function BankCard() {
  const [state, setState] = useState({
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  });

  const navigate = useNavigate();
  return (
    <div className="bankCard__container">
      <div className="bankCard">
        <p className="bank-card__title">Привяжете карту для оплаты</p>
        <div className="PaymentForm">
          <div id="bank-card">
            <Cards
              cvc={state.cvc}
              expiry={state.expiry}
              focused={state.focus}
              name={state.name}
              number={state.number}
            />
          </div>
          <form className="bank-card__inps">
            <Input
              className="cardBankInp"
              id="cardBankInp"
              onChange={(e) => {
                setState({ ...state, [e.target.name]: e.target.value });
              }}
              type="number"
              name="number"
              placeholder="Номер карты"
            />
            <Input
              className="cardBankInp"
              id="cardBankInp"
              onChange={(e) => {
                setState({ ...state, [e.target.name]: e.target.value });
              }}
              type="text"
              name="name"
              placeholder="Имя карты"
            />
            <Input
              className="cardBankInp"
              id="cardBankInp"
              onChange={(e) => {
                setState({ ...state, [e.target.name]: e.target.value });
              }}
              type="number"
              name="cvc"
              placeholder="cvc"
            />
            <Input
              className="cardBankInp"
              id="cardBankInp"
              onChange={(e) => {
                setState({ ...state, [e.target.name]: e.target.value });
              }}
              type="number"
              name="expiry"
              placeholder="Дата"
            />

            <Button
              className="bankCardBtn"
              onClick={() => navigate("/added/card")}
            >
              Привязать карту
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
