import React from "react";
import { useState } from "react";
import { useAuth } from "../../../context/AuthContextProvider";
import "./Activate.css";
const Activate = () => {
  const { handleActivate, error, loading } = useAuth();
  const [activate, setacivate] = useState();

  const handleSave = () => {
    if (!activate.trim()) {
      alert("заполните все поля!");
    } else {
      let formData = new FormData();
      formData.append("code", activate);

      handleActivate(formData);
    }
  };
  return (
    <div className="main_activate_container">
      {error ? <h2>{error}</h2> : null}
      <div className="child_container_of_activate">
        <input
          className="input_of_activate"
          onChange={(e) => setacivate(e.target.value)}
          type="text"
        />
        <button className="button_of_activate" onClick={handleSave}>
          add
        </button>
      </div>
    </div>
  );
};

export default Activate;
