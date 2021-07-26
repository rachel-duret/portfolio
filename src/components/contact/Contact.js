
import "./contact.scss";
import emailjs from 'emailjs-com';

export default function Contact() {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_cqqokgz', e.target, 'user_T7YNIAjFRo9BR5lYKAU4R')
      .then((result) => {
          alert('Merci pour les message, je vous contact bientôt !')
          
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  return (
    <div className="contact" id="contact">
      <div className="contact-container">
        <h2>Contact</h2>
        <form onSubmit={sendEmail}>
          <label htmlFor="subject" >Subject</label>
          <input type="text" placeholder="subject" name="subject" id="subject" />
          <label htmlFor="name" >Name</label>
          <input type="text" placeholder="name"  name="name" id="name" required />
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Email" name="email" id="email" required />
          <textarea placeholder="Message "name="message" ></textarea>
          <button type="submit">Send</button>
          {/* {message && <span>Merci, je vous repondrai bientôt ! </span>} */}
        </form>
      </div>
    </div>
  )
}
