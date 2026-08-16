import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .send(
        "service_siw80c5",
        "template_07cxntd",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "tbCU7hqsmf0e5BqvX"
      )
      .then(() => {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 3000);
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      });

    
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__inner">
        <div className="contact__intro">
          <span className="contact__eyebrow">Contact</span>
          <h2 className="contact__title">
            Let's build
            <br />
            something.
          </h2>
          <p className="contact__text">
            Open to freelance work and full-stack projects. Reach out and
            I'll get back to you within a day.
          </p>

          <div className="contact__status">
            <span className="contact__dot" />
            Available for new projects
          </div>

          <div className="contact__links">
            <a href="mailto:ayoubbouba202@gmail.com" className="contact__link">
              ayoubbouba202@example.com
            </a>
            <a href="https://github.com/Ayoub-Bouba" target="_blank" rel="noreferrer" className="contact__link">
              GitHub
            </a>
            <a href="https://wa.me/212636178960" target="_blank" rel="noreferrer" className="contact__link">
              WhatsApp
            </a>
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__field">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" placeholder="Your name" value={formData.name} onChange={handleChange} required />
          </div>

          <div className="contact__field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="you@example.com" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="contact__field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Tell me about your project..." value={formData.message} onChange={handleChange} required />
          </div>

          <button type="submit" className="contact__submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : status === "sent" ? "Message sent ✓" : "Send message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;