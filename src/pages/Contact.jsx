import {
  FaYoutube,
  FaTiktok,
  FaFacebook,
  FaPhone,
  FaMapMarkerAlt
} from "react-icons/fa"

import "../styles/contact.css"

function Contact() {
  return (
    <div className="contact-page">

      {/* HERO */}
      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>We are here to pray, support, and connect with you.</p>
      </div>

      {/* CONTACT DETAILS */}
      <div className="contact-container">

        {/* PHONE */}
        <div className="contact-card">
          <h2>📞 Phone</h2>

          <p>
            <FaPhone />
            <a href="tel:0803531440">0803531440</a>
          </p>

          <p>
            <FaPhone />
            <a href="tel:08181325209">08181325209</a>
          </p>
        </div>

        {/* ADDRESS */}
        <div className="contact-card">
          <h2>📍 Address</h2>

          <p>
            <FaMapMarkerAlt />
            Secretariat: Celestial Church of Christ, Oke Isegun Central,
            Born Again Cathedral Bungalow, Ifo, Ogun State
          </p>
        </div>

        {/* SOCIAL MEDIA */}
        <div className="contact-card">
          <h2>🌍 Social Media</h2>

          <div className="social-links">

            <a
              href="https://www.youtube.com/@fireinthewordoutreach"
              target="_blank"
              rel="noreferrer"
              className="youtube"
            >
              <FaYoutube /> YouTube
            </a>

            <a
              href="https://www.tiktok.com/@fireinthewordoutreach"
              target="_blank"
              rel="noreferrer"
              className="tiktok"
            >
              <FaTiktok /> TikTok
            </a>

            <a
              href="https://www.facebook.com/fireinthewordoutreach"
              target="_blank"
              rel="noreferrer"
              className="facebook"
            >
              <FaFacebook /> Facebook
            </a>

          </div>
        </div>

      </div>

      {/* CTA */}
      <div className="contact-cta">
        <h2>Need Prayer?</h2>
        <p>Submit your prayer request and we will stand with you in faith.</p>

        <a href="/prayer" className="btn">
          Go to Prayer Page
        </a>
      </div>

    </div>
  )
}

export default Contact