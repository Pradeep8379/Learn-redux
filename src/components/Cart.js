import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";

function Cart() {
  const products = useSelector((state) => state.cart);


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
          {/* <Button
            variant="primary"
            onClick={(e) => {
              addToCart(product);
            }}
          >
            Add To Cart
          </Button> */}
        </Card.Footer>
      </Card>
    </div>,
  ]);

  return <>{cards}</>;
}

export default Cart;
