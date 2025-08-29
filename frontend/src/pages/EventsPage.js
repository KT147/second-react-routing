import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  {
    id: 'e1',
    title: 'React Conference 2025',
    date: '2025-09-15',
    location: 'Tallinn, Estonia',
    description: 'A conference about all things React, including hooks, state management, and performance tips.',
  },
  {
    id: 'e2',
    title: 'JavaScript Meetup',
    date: '2025-10-03',
    location: 'Tartu, Estonia',
    description: 'Monthly meetup for JavaScript enthusiasts to share projects, ideas, and networking.',
  },
  {
    id: 'e3',
    title: 'Frontend Bootcamp Graduation',
    date: '2025-11-20',
    location: 'Online',
    description: 'Graduation ceremony for the frontend development bootcamp participants, showcasing their final projects.',
  },
];


function EventsPage() {
  return (
    <div>
      {DUMMY_EVENTS.map(event=>
        <ul key={event.id}>
         <Link to={"/events/"+event.id}><button>{event.title}</button></Link>
        </ul>
      )}
    </div>
  )
}

export default EventsPage