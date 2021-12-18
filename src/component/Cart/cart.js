import React from 'react';
import './cart.css'

const Cart = (props) => {
    const { cart } = props;
    let total = 0
    for (const product of cart) {
        total = total + product.price;
    }

    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;
    return (
        <div>
            <h2>Cart Summary</h2>
            <h3>item Orders: {props.cart.length}</h3>
            <p>Total: {total}$</p>
            <p>Shipping: {shipping}$</p>
            <p>tax: {tax}$</p>
            <h3>Grand Total: {grandTotal}$</h3>
        </div>
    );
};

export default Cart;