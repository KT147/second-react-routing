import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import EventForm from "../components/EventForm";

function EditEventPage() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/events/" + id)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Could not fetch event.");
        }
        return res.json();
      })
      .then((data) => setEvent(data.event))
      .catch((err) => setError(err.message));
  }, [id]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!event) {
    return <p>Loading...</p>;
  }

  return <EventForm event={event} />;
}

export default EditEventPage;
