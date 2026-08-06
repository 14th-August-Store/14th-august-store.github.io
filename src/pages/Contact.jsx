import { useState } from "react";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import "../css/contact.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {

  return (
    <>
      <Navbar />

      <div className="contact-page">
        <div className="contact-header">
          <h1>📞 Contact Pakistan Store 🇵🇰</h1>
          <p>We'd love to hear from you.</p>
        </div>

        <div className="contact-container">
          {/* Contact Info */}
          <div className="contact-info">
            <h2>Get In Touch</h2>

            <p>
              <FaMapMarkerAlt /> Karachi, Pakistan
            </p>

            <p>
              <FaPhoneAlt />{" "}
              <a href="tel:+923312465075">+92 331 2465075</a>
            </p>

            <p>
              <FaEnvelope />{" "}
              <a href="mailto:rizwanchandna6@gmail.com">
                rizwanchandna6@gmail.com
              </a>
            </p>


            <h3>Follow Us</h3>

            <p>
              <FaInstagram />{" "}
              <a
                href="https://instagram.com/your_username"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </p>

            <p>
              <FaWhatsapp />{" "}
              <a
                href="https://wa.me/923312465075"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </p>
          </div>
{/* Google Map */}
  <div className="contact-map">
    <iframe
      title="Pakistan Store Location"
      src="https://www.google.com/maps?q=Shop+12,+Al-Hamra+Avenue,+Opp.+Bara+Market,+Sector+5K,+North+Karachi,+Karachi,+Pakistan&output=embed"
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
