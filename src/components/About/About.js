import classes from "./About.module.css";
import Courses from "../../images/Courses.jpg";

const About = () => {
  return (
    <div className={classes.a}>
      <div className={classes.a_left}>
        <div className={classes.a_card_bg}></div>
        <div className={classes.a_card}>
          <img
            src="https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className={classes.a_image}
          ></img>
        </div>
      </div>
      <div className={classes.a_right}>
        <h1 className={classes.a_title}>About Me</h1>
        <p className={classes.a_sub}>
          I became the most googled man on the planet and to a degree I'm the
          victim of my own success.
        </p>
        <p className={classes.a_desc}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <div className={classes.a_award}>
          <img src={Courses} alt="" className={classes.a_award_image}></img>
          <div className={classes.a_award_texts}>
            <h4 className={classes.a_award_title}>
              I completed 2 udemy Courses
            </h4>
            <p className={classes.a_sub}>
              I became the most googled man on the planet and to a degree I'm
              the victim of my own success.
            </p>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default About;
