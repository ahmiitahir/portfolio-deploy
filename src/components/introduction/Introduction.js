import classes from "./Introduction.module.css";
import myImage from "../../images/My-Image.png";

const Introduction = () => {
  return (
    <div className={classes.intro}>
      <div className={classes.intro_left}>
        <div className={classes.intro_left_wrapper}>
          <h2 className={classes.intro_intro}>Hello, My name is</h2>
          <h1 className={classes.intro_name}>Galin Malchev</h1>
          <div className={classes.title_title}>
            <div className={classes.title_wrapper}>
              <div className={classes.title_item}>Web Developer Wanna-be</div>
              <div className={classes.title_item}>
              Local SEO Expert
              </div>
              <div className={classes.title_item}>Marketing Enthusiast</div>
              <div className={classes.title_item}>Technology Geek</div>
              <div className={classes.title_item}>Jack of All Trades</div>
            </div>
          </div>
          <p className={classes.intro_description}>
            My unmatched perspicacity, coupled with my sheer indefatigability,
            combine to make me a feared opponent in any realm of human endeavor.
          </p>
        </div>
        <svg
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          stroke="black"
          className={classes.intro_scroll}
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="scroll">
            <path
              id="Vector"
              d="M40.5 15L34.5 9L28.5 15"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_2"
              d="M28.5 24L34.5 30L40.5 24"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group">
              <path
                id="Vector_3"
                d="M9 37.5H60"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <path
              id="Vector_4"
              d="M34.5 27V9"
              stroke-width="2.9895"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group_2">
              <path
                id="Vector_5"
                d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </g>
        </svg>
      </div>
      <div className={classes.intro_right}>
        <div className={classes.intro_bg}></div>
        <img src={myImage} alt="" className={classes.intro_img}></img>
      </div>
    </div>
  );
};

export default Introduction;
