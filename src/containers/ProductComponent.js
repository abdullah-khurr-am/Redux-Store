import { useSelector } from "react-redux";
import {Link} from 'react-router-dom';


const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  console.log(products);
  const renderList = products.map((product) => {
    const { id, title,image, price,category } = product;
    return (
        <Link to={`/product/${id}`}>
          <div className="card" id={id}>
          <div className="image" style={{backgroundImage:`url(${image})`,backgroundSize:"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}>
          </div>
          <div className="textholder">
            <h3 className="title">{title}</h3>
            <p className="price">${price}</p>
            <p className="category">{category}</p>
          </div>
                </div>
        </Link>
    );
  });
  console.log("Rendered List is:",renderList);
  return (
    <div className="grid">
        {renderList}
    </div>
  );
};

export default ProductComponent;
