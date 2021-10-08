import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setLoading, setProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products);
  const loading = useSelector((state) => state.allProducts.loading);
  const dispatch = useDispatch();
  console.log(products);

  const fetchProduct = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((error) => {
        console.log("error", error);
      });
    dispatch(setLoading());
    console.log(loading);
    // console.log(response);
    dispatch(setProducts(response.data));
    // console.log(products);
  };

  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <>
    {loading && <div className="Loading">Loading!..</div>}
      {!loading && <div className="productlist">
        <ProductComponent />
      </div>}
    </>
  );
};

export default ProductListing;
