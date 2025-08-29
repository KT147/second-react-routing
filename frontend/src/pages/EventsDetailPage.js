import { useParams } from "react-router-dom"


function EventsDetailPage() {
  const params = useParams()

  return (
    <div>
      {params.id}
    </div>
  )
}

export default EventsDetailPage