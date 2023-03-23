import { Box, Button, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import { PRODUCTS_MAP, ShoppingCartItem } from "../models";

const TotalWrapper = styled(Box)(() => ({
  paddingTop: 40,
}));

type TotalProps = {
  items: ShoppingCartItem[];
  deleteAll: () => void;
};

const Total: React.FC<TotalProps> = ({ items, deleteAll }) => {
  const totalPrice = items.reduce((acc, item) => {
    const productPrice = PRODUCTS_MAP[item.productId].price || 0;
    return acc + item.quantity * productPrice;
  }, 0);

  return (
    <TotalWrapper>
      <Grid container>
        <Grid item xs={6}>
          <Typography>{`Total: ${totalPrice}`}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Button variant="outlined" onClick={deleteAll}>
            Clear
          </Button>
        </Grid>
      </Grid>
    </TotalWrapper>
  );
};

export default Total;
