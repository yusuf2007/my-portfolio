import "./contact.css";
import {MdOutlineEmail} from "react-icons/md"
import {BsWhatsapp} from "react-icons/bs"
import React, {useRef} from "react";
import emailjs from "emailjs-com"


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zucqz3l', 'template_695u41s', form.current, '23tqQsquwtlNF1eqE')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset()
  };


  return ( 
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <articel className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>yusnus2007@gmail.com</h5>
            <a href="mailto:yusnus2007@gmaill.com">Send a message</a>
          </articel>
          <articel className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+966 57 301 7601</h5>
            <a href="https://api.whatsapp.com/send?phone+966573017601">Send a message</a>
          </articel>
        </div>
        {/* {END OF CONTACT} */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message"></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
};

export default Contact;
