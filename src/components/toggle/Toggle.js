import classes from "./Toggle.module.css";
import Sun from "../../images/sun.png";
import Moon from "../../images/moon.png";
import { ThemeContext } from "../../store/mode-context";
import { useContext } from "react";

const Toggle = () => {
  const theme = useContext(ThemeContext);

  const handleTheme = () => {
    theme.dispatch({ type: "TOGGLE" });
  };

  return (
    <div className={classes.t}>
      <img src={Sun} alt="" className={classes.t_icon}></img>
      <img src={Moon} alt="" className={classes.t_icon}></img>
      <div className={classes.t_button} onClick={handleTheme} style={{left: theme.state.darkMode ? 0 : 25}}></div>
    </div>
  );
};

export default Toggle;
