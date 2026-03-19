import { useState } from "react"
import "../styles/prayer.css"

function Prayer() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    request: ""
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    alert("Prayer request submitted 🙏")

    // reset form
    setForm({
      name: "",
      email: "",
      request: ""
    })
  }

  return (
    <div className="prayer-page">

      <div className="prayer-hero">
        <h1>Prayer Request</h1>
        <p>Send your prayer request and we will stand in faith with you.</p>
      </div>

      <form className="prayer-form" onSubmit={handleSubmit}>
        
        <label>Full Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <label>Prayer Request</label>
        <textarea
          name="request"
          rows="5"
          value={form.request}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit" className="btn">
          Submit Prayer Request
        </button>
      </form>

    </div>
  )
}

export default Prayer