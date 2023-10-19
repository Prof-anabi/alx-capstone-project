import React, {useRef} from 'react';
import emailjs from 'emailjs-com';
import classes from './Contact.module.css'
import '../index.css';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_oewnkx4', 'template_qkjex8j', e.target, 'nA8tfE4dNeGRPVcOd')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };
    return (
        <div className={classes.Contact} >
        <h2>Contact <span>Me!</span></h2>

        <form ref={form} onSubmit={sendEmail} />
            <div className={classes.InputBox}>
                <input type="text" placeholder="Full Name" name="username" required />
                <input type="email" placeholder="Email Address" name="user-email" required />
            </div>
            <div className={classes.InputBox}>
                <input type="number" placeholder="Mobile Number" name="user-number" required />
                <input type="text" placeholder="Email Subject" name="subject" required />
            </div>
            <textarea name="message" id="" cols="30" rows="10" placeholder="Your Message" required />
            <input type="submit" value="Send Message" className={classes.Btn} />
        <form />
    </div>
    );
};

export default Contact;