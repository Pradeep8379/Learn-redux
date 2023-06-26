import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Product = () => {
  const [products, getProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => {
        // console.log(result);
        getProducts(result);
      });
  }, []);

  const cards = products.map((product, index) => [
    <div className="col-md-3" style={{ marginBottom: "10px" }}>
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
        <Card.Footer style={{ backgroundColor: "white" }} className="text-center">

            <Button variant="primary">Add To Cart</Button>
          
        </Card.Footer>
      </Card>
    </div>,
  ]);

  return (
    <>
      <div>Product</div>
      <div className="row">{cards}</div>
    </>
  );
};

export default Product;
