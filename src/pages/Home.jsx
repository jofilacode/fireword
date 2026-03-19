import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import sermons from "../data/sermons"
import "../styles/home.css"

// Prepare hero images 1.jpg → 31.jpg
const images = Array.from({ length: 31 }, (_, i) => `/${i + 1}.jpg`)

function Home() {
  const [currentImage, setCurrentImage] = useState(0)

  // Change hero image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      {/* HERO */}
      <div
        className="hero"
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      >
        <div className="hero-overlay">
          <h1>Fire in the Word Outreach Ministry</h1>
          <p>Raising men with the fire of God's Word</p>
          <h2>
            Most Superior Evangelist (Dr) Michael Olarenwaju Afolabi (JP, GSIA)
          </h2>
        </div>
      </div>

      {/* SERMON ROW (FEATURED) */}
      <div className="container">
        <h2>Latest Sermons</h2>

        <div className="sermon-row">
          {sermons.slice(0, 3).map((sermon) => (
            <div key={sermon.id} className="sermon-card">
              <h3>{sermon.title}</h3>
              <p>{sermon.scripture}</p>
              <Link to={`/sermon/${sermon.id}`}>
                <button className="btn">View Sermon</button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* VIDEO SERMON */}
      <div className="container video-section">
        <h2>Video Sermon</h2>
        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/hcQ3jY2E7Mg"
            
            title="Sermon Video"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* PROPHET PROFILE */}
      <div className="container profile-section">
        <h2>Meet the Prophet</h2>
        <div className="profile-card">
          <img src="/1.jpg" alt="Prophet" />
          <div className="profile-text">
            <h3>
              Most Superior Evangelist (Dr) Michael Olarenwaju Afolabi (JP, GSIA)
            </h3>
            <p>
              A seasoned man of God called with a prophetic mandate to raise men
              and women through the fire of God’s Word. His ministry is rooted
              in truth, power, and transformation.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
