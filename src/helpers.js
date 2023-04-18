export const API = "http://34.88.174.223";
export const ADMIN = "batirhakaton@gmail.com";

export const CART = {
  GET_CART: "GET_CART",
  GET_CART_LENGTH: "GET_CART_LENGTH",
};

export const FAVORITE = {
  GET_FAVORITE: "GET_FAVORITE",
  GET_FAVORITE_LENGTH: "GET_FAVORITE_LENGTH",
};

// export function getCountApartmensInFavorite() {
//   const favorite = JSON.parse(localStorage.getItem("favorite"));
//   return favorite ? favorite.apartmens.length : 0;
// }

// export const calcSubPrice = (apartmens) =>
//   +apartmens.count * apartmens.item.price;

// export const calcTotalPrice = (apartmens) => {
//   return apartmens.reduce((acc, curr) => {
//     return (acc += curr.subPrice);
//   }, 0);
// };
