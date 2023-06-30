import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch ,useSelector} from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";
import statusCodes from "../utils/StatusCodes";
const Product = () => {
  const dispatch = useDispatch();
  const {data :products,status}= useSelector(state=>state.products)

  useEffect(() => {
    // dispatch fetch product
    dispatch(getProducts());
  }, []);
  if(status===statusCodes.Loading){
    return<h1>Loading...</h1>
  }

  if(status===statusCodes.Error){
    return<h1>Something Went Wrong...</h1>
  }

  const addToCart = (product) => {
    dispatch(add(product));
  };

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
        <Card.Footer
          style={{ backgroundColor: "white" }}
          className="text-center"
        >
          <Button
            variant="primary"
            onClick={(e) => {
              addToCart(product);
            }}
          >
            Add To Cart
          </Button>
        </Card.Footer>
      </Card>
    </div>,
  ]);

  return (
    <>
      <div className="row">{cards}</div>
    </>
  );
};

export default Product;
