import classes from "./Contact.module.css";
import { useRef, useState, useContext } from "react";
import phoneIcon from "../../images/phone-call-icon.png";
import email from "../../images/email.png";
import github from "../../images/github.png";
import LoadingSpinner from "../UI/LoadingSpinner";

import emailjs from "@emailjs/browser";
import { ThemeContext } from "../../store/mode-context";

const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const formRef = useRef();
  const [formSent, setFormSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const isLoadingHandler = () => {
    setIsLoading(true);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    setIsLoading(true);

    emailjs
      .sendForm(
        "service_quwziaa",
        "template_f2tyv7l",
        formRef.current,
        "UzTqKHrA2FyxRjkQ3"
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormSent(true);
          setIsLoading(false);
          event.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={classes.c}>
      <div className={classes.c_bg}></div>
      <div className={classes.c_wrapper}>
        <div className={classes.c_left}>
          <h1 className={classes.c_title}>
            Feel free to get in touch with me.
          </h1>
          <div className={classes.c_info}>
            <div className={classes.c_info_item}>
              <img
                src={phoneIcon}
                alt="phone icon"
                className={classes.c_icon}
                style={{ filter: !darkMode && "none" }}
              />

              <a href="tel:+359886336229">+359 886 336 229</a>
            </div>
            <div className={classes.c_info_item}>
              <img
                src={email}
                alt="email icon"
                className={classes.c_icon}
                style={{ filter: !darkMode && "none" }}
              />

              <a href="email:g.malchev@live.com">g.malchev@live.com</a>
            </div>

            <div className={classes.c_info_item}>
              <img
                src={github}
                alt="github icon"
                className={classes.c_icon}
                style={{ filter: !darkMode && "none" }}
              />
              <a href="https://github.com/Zulaxy">https://github.com/Zulaxy</a>
            </div>
          </div>
        </div>
        <div className={classes.c_right}>
          <p className={classes.c_desc}>
            <b>Want to get in touch?</b> Use the form below to send your
            questions and I will get back to you.
          </p>
          <form ref={formRef} onSubmit={submitHandler}>
            <input
              required
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "white",
              }}
              type="text"
              placeholder="Name"
              name="user_name"
            ></input>
            <input
              required
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "white",
              }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            ></input>
            <input
              required
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "white",
              }}
              type="text"
              placeholder="Email"
              name="user_email"
            ></input>
            <textarea
              required
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "white",
              }}
              rows="5"
              placeholder="Enter Your Message"
              name="message"
            />
            <div className={classes.c_send_handler}>
              <button onClick={isLoadingHandler}>Submit</button>
              {isLoading && <LoadingSpinner />}
              {formSent && "Thank you for sending your email"}
              {isLoading && "Sending your email."}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
