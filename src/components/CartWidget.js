import * as React from 'react';
import { Badge } from '@material-ui/core';
import { ShoppingCartOutlined } from '@material-ui//icons';
import { useContext } from 'react';
import { CartContext } from './CartContext';

const CartWidget = () => {
  const badge = useContext(CartContext);

  return (
    <Badge badgeContent={2} color="primary">
      <ShoppingCartOutlined  />
    </Badge>
  );
}

export default CartWidget;