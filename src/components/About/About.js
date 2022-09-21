import classes from "./About.module.css";

const About = () => {
  return (
    <div className={classes.a}>
      <div className={classes.a_left}>
        <div className={classes.a_card_bg}/>
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
          I started my web development journey back in February 2022 as a hobby
          that grew to be a passion and since then I have been exploring the
          technologies behind MERN with a current focus on React.
        </p>
        <p className={classes.a_desc}>
          I have covered the main practices in React like Hooks, States,
          Debugging, Using Reducers and Context API, Sending HTTP requests,
          Routing, Redux, Deployment, Authtentication (with Firebase), Next JS,
          a glimpse of TypeScript and the best practices in the industry. I have
          also covered all of the main principles of modern JS, CSS frameworks
          (Bulma and Bootstrap), Flexbox, DOM, Express, Node JS, MongoDB, AJAX
          and NPM. While I must be sincere to say that I have not mastered them
          all yet, I am looking forward to further solidify and expand my
          knowledge within the MERN stack. Started using Git and Github to
          manage all of my work.
        </p>
        <div className={classes.a_award}>
          {/* <img src={Courses} alt="" className={classes.a_award_image}></img> */}
          <div className={classes.a_award_texts}>
            <h4 className={classes.a_award_title}>
              I started my learning process by following the below sources and
              always seek to expand my knowledge:
            </h4>
            <ul>
              <li>
                <p className={classes.a_sub}>
                  <a href="https://www.udemy.com/course/the-web-developer-bootcamp/">
                    The Web Developer Bootcamp 2022 by Colt Steele
                  </a>
                </p>
              </li>
              <li>
                <p className={classes.a_sub}>
                  <a href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/">
                    React - The Complete Guide by Maximilian Schwarzmüller
                  </a>
                </p>
              </li>
              <li>
                <p className={classes.a_sub}>
                  YouTube Guides, StackOverflow, Forums and Articles that helped
                  me resolve specific cases.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
