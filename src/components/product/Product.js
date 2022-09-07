import classes from "./Product.module.css";

const Product = ({ img, link, desc }) => {
  return (
    <div className={classes.p}>
      <div className={classes.p_browser}>
        <div className={classes.p_circle}></div>
        <div className={classes.p_circle}></div>
        <div className={classes.p_circle}></div>
        <div className={classes.p_desc}>
          <p>{desc}</p>
        </div>
      </div>

      <a href={link} target="_blank" rel="noreferrer">
        {/* fullscreen screenshot */}
        <img src={img} alt="" className={classes.p_image}></img>
      </a>
    </div>
  );
};

export default Product;
