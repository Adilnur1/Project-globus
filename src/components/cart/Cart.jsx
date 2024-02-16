import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContextProvider";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const Cart = () => {
  const { cart, getCart, changeProductCount, deleteProductFromCart } =
    useCart();
  useEffect(() => {
    getCart();
  }, []);
  const cartCleaner = () => {
    localStorage.removeItem("cart");
    getCart();
  };
  console.log(cart);
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table" sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell align="right">Товар</TableCell>
            <TableCell align="right">Название</TableCell>
            <TableCell align="right">Категория</TableCell>
            <TableCell align="right">Цена</TableCell>
            <TableCell align="right">Количество</TableCell>
            <TableCell align="right">Сумма</TableCell>
            <TableCell align="right">-</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {cart.products.map((elem) => (
            <TableRow
              key={elem.item.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="right" scope="row" component="th">
                <img src={elem.item.image} alt={elem.item.name} width={100} />
              </TableCell>
              <TableCell align="right">{elem.item.name}</TableCell>
              <TableCell align="right">{elem.item.category}</TableCell>
              <TableCell align="right">{elem.item.price}</TableCell>
              <TableCell align="right">
                <input
                  onChange={(e) =>
                    changeProductCount(elem.item.id, e.target.value)
                  }
                  min={1}
                  max={30}
                  type="number"
                  defaultValue={elem.count}
                />
              </TableCell>
              <TableCell align="right">{elem.subPrice}</TableCell>
              <TableCell align="right">
                <Button onClick={() => deleteProductFromCart(elem.item.id)}>
                  DELETE
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button onClick={cartCleaner}>
        Оплатить покупку за {cart.totalPrice}
      </Button>
    </TableContainer>
  );
};

export default Cart;
