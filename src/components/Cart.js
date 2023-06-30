import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

function Cart() {
  const products = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const removeFromCart = (id) => {
    dispatch(remove(id));
  };

  const cards = products.map((product, index) => [
    <div className="col-md-12" style={{ marginBottom: "10px" }}>
      <Card className="h-100" key={product.id}>
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "100px", height: "130px" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>INR:{product.price}</Card.Text>
        </Card.Body>
        <Card.Footer
          style={{ backgroundColor: "white" }}
          className="text-center"
        >
          <Button
            variant="danger"
            onClick={() => {
              removeFromCart(product.id);
            }}
          >
            Remove Item
          </Button>
        </Card.Footer>
      </Card>
    </div>,
  ]);

  return <>{cards}</>;
}

export default Cart;
