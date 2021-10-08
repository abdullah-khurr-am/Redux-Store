import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { removeSelectedProducts, selectedProduct } from "../redux/actions/productActions";
import "../style/ProductDetails.css";

const ProductDetails = () => {
  const { productId } = useParams();
  const data = useSelector((state) => state.selectedProduct);
  const dispatch = useDispatch();
  const fetchdetails = async () => {
    const details = await axios.get(
      `https://fakestoreapi.com/products/${productId}`
    );
    console.log(details);
    dispatch(selectedProduct(details.data));
  };
  useEffect(() => {
    if (productId && productId != "") fetchdetails();
    return ()=>dispatch(removeSelectedProducts());
  }, [productId]);
  console.log(data);
  const { id, title, image, category,description } = data;
  console.log("ProductId:", productId);
  console.log("returned ID:", id);
  return (
    <>
      {Object.keys(data).length === 0? <div className="Loading">Loading!</div> : <div className="productdetail">
        <div id="Image" style={{ backgroundImage: `url(${image})` }}></div>
        <div id="Text">
          <h2>{title}</h2>
          <h4>{category}</h4>
          <p style={{width:"32vw",textAlign:"justify"}}>{description}</p>
        </div>
      </div>}
    </>
  );
};

export default ProductDetails;
