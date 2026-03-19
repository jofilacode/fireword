import "../styles/bibleSchool.css"

function BibleSchool() {
  return (
    <div className="bible-school">

      {/* HERO */}
      <div className="school-hero">
        <h1>God's Leadership Training Theology Institute (GLTTI) </h1>
        <p>
          Training believers in the Word, power, and the Spirit for kingdom impact.
        </p>
      </div>

      {/* ABOUT */}
      <div className="section">
        <h2>About the School</h2>
        <p>
          This Bible School is designed to equip believers with deep spiritual
          understanding, sound doctrine, and practical ministry experience.
        </p>
      </div>

      {/* PROGRAM DETAILS */}
      <div className="section">
        <h2>Program Details</h2>

        <ul className="list">
          <li>Duration: (1 - 3 months each level)</li>
          <li>Mode: Online & Physical</li>
          <li>Location: Karu Abuja / Ogun State</li>
          <li>Certification: Available upon completion</li>
        </ul>
      </div>

      {/* COURSES */}
      <div className="section">
        <h2>Courses Offered</h2>

        <div className="courses">
          <div className="course-card">
            <h3>Foundation in the Word</h3>
            <p>Learn the basics of faith, salvation, and spiritual growth.</p>
          </div>

          <div className="course-card">
            <h3>Spiritual Gifts</h3>
            <p>Understanding and operating in the gifts of the Spirit.</p>
          </div>

          <div className="course-card">
            <h3>Ministry & Leadership</h3>
            <p>Develop leadership and ministry skills for service.</p>
          </div>
        </div>
      </div>

      {/* REGISTRATION CTA */}
      <div className="cta">
        <h2>Join the Bible School Today</h2>
        <p>
          Become part of a powerful training experience designed to transform your life.
        </p>

        <button className="btn">Register Now</button>
      </div>

    </div>
  )
}

export default BibleSchool