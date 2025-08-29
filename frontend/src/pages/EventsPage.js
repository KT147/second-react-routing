import { useEffect, useState } from 'react';

import EventsList from '../components/EventsList';
import EventsRoot from './EventsRoot';

function EventsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedEvents, setFetchedEvents] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchEvents() {
      setIsLoading(true);
      const response = await fetch('http://localhost:8080/events');

      if (!response.ok) {
        setError('Fetching events failed.');
        // return {isError: true, message: "Could not fetch events"}
        throw new Response(JSON.stringify({message: "Could not fetch events"}))
      } else {
        const resData = await response.json();
        setFetchedEvents(resData.events);
        // const res = new Response("any data", {status: 201})
        // return res
      }
      setIsLoading(false);
    }

    fetchEvents();
  }, []);
  return (
    <>
    <EventsRoot/>
      <div style={{ textAlign: 'center' }}>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </div>
      {!isLoading && fetchedEvents && <EventsList events={fetchedEvents} />}
    </>
  );
}

export default EventsPage;