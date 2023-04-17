import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "../../context/AddProductProvider";

const EditProduct = () => {
  const { getOneProduct, oneProduct, updateProduct } = useProduct();

  const { id } = useParams();
  useEffect(() => {
    getOneProduct(id);
  }, []);

  useEffect(() => {
    if (oneProduct) {
      setStreet(oneProduct.street);
      setCity(oneProduct.city);
      setRooms(oneProduct.rooms);
      setNumberOfBeds(oneProduct.number_of_beds);
      setFloor(oneProduct.floor);
      setCategory(oneProduct.category);
      setPrice(oneProduct.price);
      setImages(oneProduct.images);
    }
  }, [oneProduct]);

  const [user, setUser] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [rooms, setRooms] = useState("");
  const [numberOfBeds, setNumberOfBeds] = useState("");
  const [floor, setFloor] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImages] = useState("");

  function handleSave() {
    let newProduct = new FormData();
    newProduct.append("user", user);
    newProduct.append("street", street);
    newProduct.append("city", city);
    newProduct.append("rooms", rooms);
    newProduct.append("number_of_beds", numberOfBeds);
    newProduct.append("floor", floor);
    newProduct.append("price", price);
    newProduct.append("category", category);
    newProduct.append("images", images);
    updateProduct(id, newProduct);
  }

  return (
    <div className="d-flex flex-column w-50 m-auto">
      <h1 className="add_h1">изменение продукта</h1>
      <input
        className="add_input"
        type="text"
        placeholder="пользователь"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <input
        className="add_input"
        type="text"
        placeholder="улица"
        value={street}
        onChange={(e) => setStreet(e.target.value)}
      />
      <input
        className="add_input"
        type="text"
        placeholder="город"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />{" "}
      <input
        className="add_input"
        type="text"
        placeholder="номера"
        value={rooms}
        onChange={(e) => setRooms(e.target.value)}
      />{" "}
      <input
        className="add_input"
        type="text"
        placeholder=" количество кроватей"
        value={numberOfBeds}
        onChange={(e) => setNumberOfBeds(e.target.value)}
      />{" "}
      <input
        className="add_input"
        type="text"
        placeholder="floor"
        value={floor}
        onChange={(e) => setFloor(e.target.value)}
      />{" "}
      <input
        className="add_input"
        type="text"
        placeholder="категория"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />{" "}
      <input
        className="add_input"
        type="text"
        placeholder="цена"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImages(e.target.files[0])}
      />
      <button className="add_button btn-16 " onClick={handleSave}>
        {" "}
        СОХРАНИТЬ
      </button>
    </div>
  );
};

export default EditProduct;
