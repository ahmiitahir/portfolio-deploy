import { useRef, useState, useContext } from "react";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../../store/mode-context";
import LoadingSpinner from "../UI/LoadingSpinner";

import phoneIcon from "../../images/phone-call-icon.png";
import emailIcon from "../../images/email.png";
import github from "../../images/github.png";
import linkedin from "../../images/linkedin.png";
import classes from "./Contact.module.css";

const ContactItem = ({ icon, link, text }) => (
  <div className={classes.c_info_item}>
    <img src={icon} alt="icon" className={classes.c_icon} />
    {link ? <a href={link}>{text}</a> : <span>{text}</span>}
  </div>
);

const InputField = ({ type, placeholder, name, darkMode }) => {
  const inputStyles = {
    backgroundColor: darkMode ? "#333" : "white",
    color: darkMode ? "white" : "black",
  };

  return <input required style={inputStyles} type={type} placeholder={placeholder} name={name} />;
};

const Contact = () => {
  const { state: { darkMode } } = useContext(ThemeContext);
  const formRef = useRef();
  const [formSent, setFormSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const submitHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const result = await emailjs.sendForm(
        "service_ks80edw",
        "template_f2tyv7l",
        formRef.current,
        "UzTqKHrA2FyxRjkQ3"
      );
      console.log(result.text);
      setFormSent(true);
      event.target.reset();
    } catch (error) {
      console.error(error.text);
      setErrorMessage("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={classes.c}>
      <div className={classes.c_bg}></div>
      <div className={classes.c_wrapper}>
        <div className={classes.c_left}>
          <h1 className={classes.c_title}>Feel free to get in touch with me.</h1>
          <div className={classes.c_info}>
            <ContactItem icon={phoneIcon} text="+359 886 336 229" link="tel:+359886336229" />
            <ContactItem icon={emailIcon} text="g.malchev@live.com" link="mailto:g.malchev@live.com" />
            <ContactItem icon={github} text="GitHub" link="https://github.com/Zulaxy" />
            <ContactItem icon={linkedin} text="LinkedIn" link="https://www.linkedin.com/in/galin-malchev/" />
          </div>
        </div>
        <div className={classes.c_right}>
          <p className={classes.c_desc}>
            <b>Want to get in touch?</b> Use the form below to send your questions, and I'll get back to you.
          </p>
          <form ref={formRef} onSubmit={submitHandler}>
            <InputField type="text" placeholder="Name" name="user_name" darkMode={darkMode} />
            <InputField type="text" placeholder="Subject" name="user_subject" darkMode={darkMode} />
            <InputField type="email" placeholder="Email" name="user_email" darkMode={darkMode} />
            <textarea
              required
              style={{ backgroundColor: darkMode ? "#333" : "white", color: darkMode ? "white" : "black" }}
              rows="8"
              placeholder="Enter Your Message"
              name="message"
            />
            <div className={classes.c_send_handler}>
              <button type="submit" disabled={isLoading}>
                {isLoading ? "Sending..." : "Submit"}
              </button>
              {isLoading && <LoadingSpinner />}
              {formSent && <p className={classes.success_message}>Thank you for your message!</p>}
              {errorMessage && <p className={classes.error_message}>{errorMessage}</p>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
