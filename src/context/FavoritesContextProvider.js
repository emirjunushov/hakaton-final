import React, { createContext, useReducer } from "react";
import { useContext } from "react";
import { FAVORITE } from "../helpers";

export const favoritesContext = createContext();
export const useFavorite = () => useContext(favoritesContext);

const INIT_STATE = {
  favorite: JSON.parse(localStorage.getItem("favorite")),
  // favoriteLength: getCountProductsInFavorite(),
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case FAVORITE.GET_FAVORITE:
      return { ...state, favorite: action.payload };

    case FAVORITE.GET_FAVORITE_LENGTH:
      return { ...state, favoriteLength: action.payload };

    default:
      return state;
  }
}

const FavoriteContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getFavorite = () => {
    let favorite = JSON.parse(localStorage.getItem("favorite"));
    if (!favorite) {
      localStorage.setItem(
        "favorite",
        JSON.stringify({ apartmens: [], totalPrice: 0 })
      );
      favorite = { apartmens: [], totalPrice: 0 };
    }
    dispatch({ type: FAVORITE.GET_FAVORITE, payload: favorite });
  };

  const addApartmensToFavorite = (apartmens) => {
    let favorite = JSON.parse(localStorage.getItem("favorite"));

    if (!favorite) {
      favorite = { apartmens: [], totalPrice: 0 };
    }

    let newApartmens = {
      item: apartmens,
      count: 1,
      subPrice: +apartmens.price,
    };

    let apartmensToFind = favorite.apartmens.filter(
      (elem) => elem.item.id === apartmens.id
    );

    if (apartmensToFind.length === 0) {
      favorite.apartmens.push(newApartmens);
    } else {
      favorite.apartmens = favorite.apartmens.filter(
        (elem) => elem.item.id != apartmens.id
      );
    }

    // favorite.totalPrice = calcTotalPrice(favorite.apartmens);

    localStorage.setItem("favorite", JSON.stringify(favorite));

    dispatch({
      type: FAVORITE.GET_FAVORITE,
      payload: favorite,
    });
  };

  function checkApartmensInCard(id) {
    let favorite = JSON.parse(localStorage.getItem("favorite"));
    if (favorite) {
      let newFavorite = favorite.apartmens.filter((elem) => elem.item.id == id);
      return newFavorite.length > 0 ? true : false;
    }
  }

  const changeApartmensCount = (count, id) => {
    let favorite = JSON.parse(localStorage.getItem("favorite"));

    favorite.apartmens = favorite.apartmens.map((apartmens) => {
      if (apartmens.item.id === id) {
        apartmens.count = count;
        // apartmens.subPrice = calcSubPrice(apartmens);
      } else {
        return apartmens;
      }
    });
    // favorite.totalPrice = calcTotalPrice(favorite.apartmens);
    localStorage.setItem("favorite", JSON.stringify(favorite));

    dispatch({ type: FAVORITE.GET_FAVORITE, payload: favorite });
  };

  function deleteFavoriteApartmens(id) {
    let favorite = JSON.parse(localStorage.getItem("favorite"));
    favorite.apartmens = favorite.apartmens.filter(
      (elem) => elem.item.id != id
    );
    // favorite.totalPrice = calcTotalPrice(favorite.apartmens);

    localStorage.setItem("favorite", JSON.stringify(favorite));
    getFavorite();
  }

  const values = {
    getFavorite,
    favorite: state.favorite,
    addApartmensToFavorite,
    checkApartmensInCard,
    changeApartmensCount,
    deleteFavoriteApartmens,
  };
  return (
    <favoritesContext.Provider value={values}>
      {children}
    </favoritesContext.Provider>
  );
};

export default FavoriteContextProvider;
