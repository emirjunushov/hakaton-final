import * as React from "react"; // импортируем библиотеку React
import Table from "@mui/material/Table"; // импортируем компонент Table из библиотеки Material-UI
import TableBody from "@mui/material/TableBody"; // импортируем компонент TableBody из библиотеки Material-UI
import TableCell from "@mui/material/TableCell"; // импортируем компонент TableCell из библиотеки Material-UI
import TableContainer from "@mui/material/TableContainer"; // импортируем компонент TableContainer из библиотеки Material-UI
import TableHead from "@mui/material/TableHead"; // импортируем компонент TableHead из библиотеки Material-UI
import TableRow from "@mui/material/TableRow"; // импортируем компонент TableRow из библиотеки Material-UI
import Paper from "@mui/material/Paper"; // импортируем компонент Paper из библиотеки Material-UI
import { Button } from "@mui/material"; // импортируем компонент Button из библиотеки Material-UI
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import "../Cart/Cart.css";
import { useCart } from "../../context/CartContextProvider";
// функция, которая возвращает объект с полями name, calories, fat, carbs, protein
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

export default function Cart() {
  const navigate = useNavigate();
  const { getCart, cart, changeProductCount, deleteCartProduct } = useCart();
  React.useEffect(() => {
    getCart();
  }, []);
  return (
    <div className="Cart">
      <div className="imge">
        <img
          className="imgs"
          src="https://t4.ftcdn.net/jpg/05/30/81/27/240_F_530812741_1e8jiYtTvCg1COfphxTAqhn5WqCTP7cv.jpg"
          alt=""
        />
        <img
          className="imgs"
          src="https://t4.ftcdn.net/jpg/05/30/81/27/240_F_530812741_1e8jiYtTvCg1COfphxTAqhn5WqCTP7cv.jpg"
          alt=""
        />
        <img
          className="imgs"
          src="https://t4.ftcdn.net/jpg/05/30/81/27/240_F_530812741_1e8jiYtTvCg1COfphxTAqhn5WqCTP7cv.jpg"
          alt=""
        />
        <img
          className="imgs"
          src="https://t4.ftcdn.net/jpg/05/30/81/27/240_F_530812741_1e8jiYtTvCg1COfphxTAqhn5WqCTP7cv.jpg"
          alt=""
        />
        <img
          className="imgs"
          src="https://t4.ftcdn.net/jpg/05/30/81/27/240_F_530812741_1e8jiYtTvCg1COfphxTAqhn5WqCTP7cv.jpg"
          alt=""
        />
        <img
          className="imgs"
          src="https://t4.ftcdn.net/jpg/05/30/81/27/240_F_530812741_1e8jiYtTvCg1COfphxTAqhn5WqCTP7cv.jpg"
          alt=""
        />
        <img
          className="imgs"
          src="https://t4.ftcdn.net/jpg/05/30/81/27/240_F_530812741_1e8jiYtTvCg1COfphxTAqhn5WqCTP7cv.jpg"
          alt=""
        />
        <img
          className="imgs"
          src="https://t4.ftcdn.net/jpg/05/30/81/27/240_F_530812741_1e8jiYtTvCg1COfphxTAqhn5WqCTP7cv.jpg"
          alt=""
        />
        <img
          className="imgs"
          src="https://t4.ftcdn.net/jpg/05/30/81/27/240_F_530812741_1e8jiYtTvCg1COfphxTAqhn5WqCTP7cv.jpg"
          alt=""
        />
        <img
          className="imgs"
          src="https://t4.ftcdn.net/jpg/05/30/81/27/240_F_530812741_1e8jiYtTvCg1COfphxTAqhn5WqCTP7cv.jpg"
          alt=""
        />
      </div>
      <TableContainer className="Table" component={Paper}>
        <Table
          sx={{ minWidth: 650, maxWidth: 1100, margin: "auto" }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align="left">Квартира</TableCell>
              <TableCell align="center">Цена</TableCell>
              <TableCell align="center">Месяц</TableCell>
              <TableCell align="center">Всего</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart?.products.map((row) => (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">
                  <Button>
                    <CloseIcon onClick={() => deleteCartProduct(row.item.id)} />
                  </Button>
                </TableCell>
                <TableCell component="th" scope="row" align="left">
                  <img width="100" height="100" src={row.item.images} />
                </TableCell>
                <TableCell align="center">{row.item.price}</TableCell>
                <TableCell align="center">
                  <input
                    className="count"
                    type="number"
                    value={row.item.count}
                    min={1}
                    max={100}
                    onChange={(e) =>
                      changeProductCount(e.target.value, row.item.id)
                    }
                  />
                </TableCell>
                <TableCell align="center">{row.subPrice}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <Button onClick={() => navigate("/bank/card")}>
          BUY NOW FOR: {cart?.totalPrice}
        </Button>
      </TableContainer>
      <div className="imge">
        <img
          className="imgs"
          src="https://t4.ftcdn.net/jpg/05/30/81/27/240_F_530812741_1e8jiYtTvCg1COfphxTAqhn5WqCTP7cv.jpg"
          alt=""
        />
        <img
          className="imgs"
          src="https://t4.ftcdn.net/jpg/05/30/81/27/240_F_530812741_1e8jiYtTvCg1COfphxTAqhn5WqCTP7cv.jpg"
          alt=""
        />
        <img
          className="imgs"
          src="https://t4.ftcdn.net/jpg/05/30/81/27/240_F_530812741_1e8jiYtTvCg1COfphxTAqhn5WqCTP7cv.jpg"
          alt=""
        />
        <img
          className="imgs"
          src="https://t4.ftcdn.net/jpg/05/30/81/27/240_F_530812741_1e8jiYtTvCg1COfphxTAqhn5WqCTP7cv.jpg"
          alt=""
        />
        <img
          className="imgs"
          src="https://t4.ftcdn.net/jpg/05/30/81/27/240_F_530812741_1e8jiYtTvCg1COfphxTAqhn5WqCTP7cv.jpg"
          alt=""
        />
        <img
          className="imgs"
          src="https://t4.ftcdn.net/jpg/05/30/81/27/240_F_530812741_1e8jiYtTvCg1COfphxTAqhn5WqCTP7cv.jpg"
          alt=""
        />
        <img
          className="imgs"
          src="https://t4.ftcdn.net/jpg/05/30/81/27/240_F_530812741_1e8jiYtTvCg1COfphxTAqhn5WqCTP7cv.jpg"
          alt=""
        />
        <img
          className="imgs"
          src="https://t4.ftcdn.net/jpg/05/30/81/27/240_F_530812741_1e8jiYtTvCg1COfphxTAqhn5WqCTP7cv.jpg"
          alt=""
        />
        <img
          className="imgs"
          src="https://t4.ftcdn.net/jpg/05/30/81/27/240_F_530812741_1e8jiYtTvCg1COfphxTAqhn5WqCTP7cv.jpg"
          alt=""
        />
        <img
          className="imgs"
          src="https://t4.ftcdn.net/jpg/05/30/81/27/240_F_530812741_1e8jiYtTvCg1COfphxTAqhn5WqCTP7cv.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
