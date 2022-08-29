import classes from "./ProductList.module.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className={classes.pl}>
      <div className={classes.pl_texts}>
        <h1 className={classes.pl_title}>Please feel free to review my Portfolio</h1>
        <p className={classes.pl_desc}>
          This is my portfolio where we do all projects that i have covered
          during my journey to become a web developer. This is my portfolio
          where we do all projects that i have covered during my journey to
          become a web developer
        </p>
      </div>
      <div className={classes.pl_list}>
        {products.map((item) => {
          return <Product key={item.id} img={item.img} link={item.link} />;
        })}
      </div>
    </div>
  );
};

export default ProductList;
