import { useParams } from "react-router-dom"
import sermons from "../data/sermons"

function SermonDetails() {
  const { id } = useParams()
  const sermon = sermons.find((s) => s.id === Number(id))

  if (!sermon) return <p>Not found</p>

  return (
    <div className="container">
      <h1>{sermon.title}</h1>
      <p>{sermon.scripture}</p>

     <div className="video-wrapper">
  <iframe
    src={sermon.videoUrl}
    title="video"
    allowFullScreen
  ></iframe>
</div>

      <p>{sermon.content}</p>
    </div>
  )
}

export default SermonDetails