import React from "react";
import { useState } from "react";
import { useAuth } from "../../../context/AuthContextProvider";

const Activate = () => {
  const { handleActivate, error } = useAuth();
  const [activate, setacivate] = useState();

  const handleSave = (e) => {
    e.preventDefault();

    if (!activate.trim()) {
      alert("заполните все поля!");
    } else {
      let formData = new FormData();
      formData.append("code", activate);

      handleActivate(formData);
    }
  };
  return (
    <div>
      {error ? <h2>{error}</h2> : null}
      <form action="submit" onSubmit={handleSave}>
        <input onChange={(e) => setacivate(e.target.value)} type="text" />
        <button>add</button>
      </form>
    </div>
  );
};

export default Activate;
