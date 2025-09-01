import { useNavigate } from "react-router-dom"
import EventForm from "../components/EventForm"



function NewEventPage() {

  const navigate = useNavigate()

  async function handleSubmit(event) {
    event.preventDefault()
    const data = new FormData(event.target)
    
    const eventData ={
      title: data.get("title"),
      image: data.get("image"),
      date: data.get("date"),
      description: data.get("description")
      
    }
    
    const response=  await fetch("http://localhost:8080/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(eventData)
    })
    
    if (!response.ok) {
      console.log("Not okay")
    }

    if (response.status === 422) {
      return response
    }
    
    if (response.ok) {
      navigate("/events")
    }
    
    }
    
  return (
    <EventForm method="post" handleSubmit={handleSubmit} />
  )
}

export default NewEventPage