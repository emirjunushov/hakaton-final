import React from "react";
import { useFavorite } from "../../context/FavoritesContextProvider";
import { TableCell } from "@mui/material";
import { Button } from "react-bootstrap";

function createData(user, apartment, is_favorite, favorites) {
  return { user, apartment, is_favorite, favorites };
}

const FavoritePages = () => {
  const {
    getFavorite,
    favorites,
    changeApartmensCount,
    deleteFavoriteApartmens,
  } = useFavorite();

  React.useEffect(() => {
    getFavorite();
  }, []);

  const FavoriteCleaner = () => {
    localStorage.removeItem("favorite");
    getFavorite();
  };

  return (
    <div>
      {favorites?.apartment.map((row) => (
        <div key={row.item.id}>
          <div component="th" scope="row">
            <img width="100" height="100" src={row.item.images} alt="" />
          </div>
          <div align="right">{row.item.user}</div>
          <div align="right">{row.item.description}</div>
          <div align="right">${row.item.price}</div>
          <div align="right">
            <Button onClick={() => deleteFavoriteApartmens(row.item.id)}>
              DELETE
            </Button>
          </div>
        </div>
      ))}
      <Button onClick={FavoriteCleaner}>BUY ${favorites?.totalPrice}</Button>
    </div>
  );
};

export default FavoritePages;
