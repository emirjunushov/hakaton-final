import React from "react";
import BlockIcon from "@mui/icons-material/Block";
import "./NotFoundPage.css";

const NotFoundPage = () => {
  return (
    <div className="NotFoundPage__container">
      {" "}
      <div className="NotFoundPage">
        <BlockIcon className="NotFoundPage__icon" />
        <p className="NotFoundPage__paragraph">
          {" "}
          СТРАНИЦА НЕ НАЙДЕНА, ПОЖАЛУЙСТА ПОПРОБУЙТЕ ПЕРЕЗАПУСТИТЬ САЙТ{" "}
          <span className="NotFoundPage__span">!</span>
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
