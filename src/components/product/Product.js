import classes from "./Product.module.css";

const Product = ({ img, link, desc, technologies }) => {
  return (
    <div className={classes.p}>
      <div>
        <div className={classes.p_browser}>
          <div className={classes.p_circle} />
          <div className={classes.p_circle} />
          <div className={classes.p_circle} />
          <div className={classes.p_desc}>
            <p>{desc}</p>
          </div>
        </div>

        <a href={link} target="_blank" rel="noreferrer">
          <img src={img} alt="" className={classes.p_image} />
        </a>

        <div className={classes.sticky_paragraph}>
          <p>{technologies.join(", ")}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
