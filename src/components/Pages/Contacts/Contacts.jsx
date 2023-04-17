import React from "react";
import "./Contacts.css";

const Contacts = () => {
  return (
    <div className="contacts__container">
      <div className="contacts">
        <p className="contacts__title">
          Будем рады вам помочь, наша линия связи{" "}
          <span className="contacts__title-span">27 на 7</span> доступно для
          всех!
        </p>
        Тел:{" "}
        <a className="contacts_href" href="tel: +000 123 456 789">
          +996 000 123 456
        </a>
        Почта:
        <a
          className="contacts_href"
          href="mailto:batirhakaton@gmail.com"
          target="_blanck"
        >
          batirhakaton@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Contacts;
