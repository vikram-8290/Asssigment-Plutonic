import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table, Button } from "antd";
import { removeProduct, addProduct, reduceProduct } from "../utils/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const columns = [
    {
      title: "Product",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => `$${price.toFixed(2)}`,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Total",
      key: "total",
      render: (product) => `$${(product.price * product.quantity).toFixed(2)}`,
    },
    {
      title: "Remove",
      key: "remove",
      render: (product) => (
        <Button
          type="primary"
          danger
          onClick={() => {
            dispatch(removeProduct(product.id)); 
          }}
        >
          Remove
        </Button>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (product) => (
        <div>
        <Button
          type="primary"
          onClick={() => {
            dispatch(addProduct(product));
          }}
        >
          +
        </Button>
        <Button
          type="primary"
          danger
          onClick={() => {
            dispatch(reduceProduct(product));
          }}
        >
          -
        </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart.products.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <Table
            dataSource={cart.products}
            columns={columns}
            rowKey="id"
            pagination={false}
            footer={() => (
              <>
                <div style={{ textAlign: 'right' }}>
                  <strong>Total Items: </strong>{cart.quantity}
                </div>
                <div style={{ textAlign: 'right' }}>
                  <strong>Total Amount: </strong>${cart.total.toFixed(2)}
                </div>
              </>
            )}
          />
          <div className="cart-actions" style={{ textAlign: 'right', marginTop: '20px' }}>
            <Button type="primary" style={{ backgroundColor: "rgb(255, 144, 53)", color: "white" }}>
              Proceed to Checkout
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
