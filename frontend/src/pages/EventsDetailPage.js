import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";

function EventsDetailPage() {
  const { id } = useParams(); // võtab URL-ist id
  const [event, setEvent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/events/" + id)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Could not fetch event.");
        }
        return response.json();
      })
      .then((data) => setEvent(data.event)) // eeldan, et backend tagastab { event: {...} }
      .catch((err) => setError(err.message));
  }, [id]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!event) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <EventItem event={event} />
    </>
  );
}

export default EventsDetailPage;
