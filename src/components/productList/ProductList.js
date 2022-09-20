import classes from "./ProductList.module.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className={classes.pl}>
      <div className={classes.pl_texts}>
        <h1 className={classes.pl_title}>Feel free to check some of the projects I've worked on.</h1>
        <p className={classes.pl_desc}>
          I've used mostly React, APIs, MUI, Responsive Design. 
        </p>
      </div>
      <div className={classes.pl_list}>
        {products.map((item) => {
          return <Product key={item.id} img={item.img} link={item.link} desc={item.desc}/>;
        })}
      </div>
    </div>
  );
};

export default ProductList;
