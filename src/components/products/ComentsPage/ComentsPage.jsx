import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAddComments } from "../../../context/AddCommentsProvider";
import { useProduct } from "../../../context/AddProductProvider";
import "./ComentsPage.css";
const ComentsPage = () => {
  const { getOneProduct, oneProduct } = useProduct();
  const { PostOneComment } = useAddComments();
  const { id } = useParams();
  useEffect(() => {
    getOneProduct(id);
  }, []);
  // !============================================
  const [comments, setComments] = React.useState("");
  const [apartment, setApartment] = React.useState(id);
  useEffect(() => {
    setApartment(id);
  }, []);

  function handleSave() {
    let newProduct = new FormData();

    newProduct.append("text", comments);
    newProduct.append("apartment", apartment);
    PostOneComment(newProduct);
  }
  // !=============================================
  return (
    <div>
      <div>
        <div>
          <img className="coment_images" src={oneProduct?.images} alt="" />
        </div>
        <div></div>
      </div>
      <div>
        <input onChange={(e) => setComments(e.target.value)} type="text" />

        <button onClick={handleSave}>add</button>
      </div>
    </div>
  );
};

export default ComentsPage;
