import {
  Box,
  Button,
  FormControl,
  MenuItem,
  styled,
  TextField,
} from "@mui/material";
import { useState } from "react";

import { ALL_PRODUCTS, ShoppingCartItem } from "../models";

const AddItemBox = styled(Box)(() => ({
  display: "flex",
  flex: 1,
  marginTop: "25px",
}));

const ItemSelectWrapper = styled(FormControl)(() => ({
  width: "200px",
  marginRight: "20px",
}));

const QuantityInputWrapper = styled(FormControl)(() => ({
  width: "80px",
  marginRight: "20px",
}));

interface AddItemFormProps {
  addProduct: (id: string, quantity: number) => void;
}

const AddItemForm: React.FC<AddItemFormProps> = ({addProduct}) => {
  const [productId, setProductId] = useState<any>("");
  const [quantity, setQuantity] = useState<number>(0);
  console.log(quantity)
  return (
    <AddItemBox>
      <ItemSelectWrapper>
        <TextField select value={productId}   onChange={(e: any) => setProductId(e.target.value)} label="Product">
          {ALL_PRODUCTS.map((product) => (
            <MenuItem
              key={product.id}
              value={product.id}
            >
              {product.label}
            </MenuItem>
          ))}
        </TextField>
      </ItemSelectWrapper>
      <QuantityInputWrapper>
        <TextField
          label="Quantity"
          type="number"
          value={quantity >= 0 ? quantity : 0}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setQuantity(+e.target.value)
          }
        />
      </QuantityInputWrapper>
      <Button variant="contained" disabled={!quantity || !productId} onClick={() => addProduct(productId, quantity)}>
        Add
      </Button>
    </AddItemBox>
  );
};

export default AddItemForm;
