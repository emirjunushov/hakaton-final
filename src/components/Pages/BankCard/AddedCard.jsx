import React from "react";

const AddedCard = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "25rem",
      }}
    >
      <h1 style={{ textAlign: "center", padding: "5rem" }}>
        Здесь будет отображаться то что вы успешно или не успешно добавили
        карту, а пока что эта часть не доступно. Ваш банк ещё не было добавлено
        в наш сайт.
      </h1>
    </div>
  );
};

export default AddedCard;
