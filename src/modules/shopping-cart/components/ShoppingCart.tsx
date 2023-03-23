import { Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";

import { ShoppingCartItem } from "../models";

import AddItemForm from "./AddItemForm";
import ItemsList from "./ItemsList";
import Total from "./Total";

const ShoppingCardWrapper = styled(Paper)(() => ({
  width: 600,
  margin: "auto",
  padding: 50,
  minHeight: 500,
}));

const ShoppingCartHeader = styled(Typography)(() => ({
  textTransform: "uppercase",
  fontWeight: "bold",
  fontSize: 24,
}));

const ShoppingCart = () => {
  const [items, setItems] = useState<ShoppingCartItem[]>([]);
  console.log(items);
  const addProduct = (id: string, quantity: any): any => {
    setItems((prevState: any) => {
      const newArr = [...prevState];
      const index = newArr.findIndex((item) => item.productId === id);
      if (index !== -1) {
        newArr[index].quantity = quantity;
        return [...newArr];
      } else {
        return [...newArr, { productId: id, quantity }];
      }
    });
  };

  const updateQuantity = (
    productId: string,
    action: "increase" | "decrease"
  ) => {
    setItems((prevState: any) => {
      const newArr = [...prevState];
      const index = newArr.findIndex((item) => item.productId === productId);
      if (index !== -1 && action === "increase") {
        newArr[index].quantity++;
        return newArr;
      } else {
        newArr[index].quantity !== 0
          ? newArr[index].quantity--
          : newArr[index].quantity;
        return newArr;
      }
    });
  };

  const deleteAll = () => {
    setItems([]);
  };

  const deleteProduct = (id: string) => {
    setItems((prevState) => {
      const newArr = [...prevState];
      const res = newArr.filter(item => item.productId !== id);
      return res
    });
  };

  return (
    <ShoppingCardWrapper>
      <ShoppingCartHeader>Shopping Cart</ShoppingCartHeader>
      <AddItemForm addProduct={addProduct} />
      {!!items.length && (
        <>
          <ItemsList
            items={items}
            updateQuantity={updateQuantity}
            deleteProduct={deleteProduct}
          />
          <Total items={items} deleteAll={deleteAll} />
        </>
      )}
    </ShoppingCardWrapper>
  );
};

export default ShoppingCart;
