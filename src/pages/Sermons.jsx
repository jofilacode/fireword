import sermons from "../data/sermons"
import { Link } from "react-router-dom"

function Sermons() {
  return (
    <div className="container">
      <h1>Sermons</h1>

      {sermons.map((sermon) => (
        <div key={sermon.id} className="card">
          <h3>{sermon.title}</h3>
          <p>{sermon.scripture}</p>

          <Link to={`/sermons/${sermon.id}`}>
            Read More
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Sermons