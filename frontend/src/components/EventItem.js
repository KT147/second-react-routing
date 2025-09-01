import { Link, useNavigate } from 'react-router-dom';
import classes from './EventItem.module.css';

function EventItem({ event, id }) {

  const navigate = useNavigate()

  async function startDeleteHandler(id) {
    const proceed = window.confirm("Are you sure?")

    if (proceed) {
      await fetch (`http://localhost:8080/events/${id}`, { method: "DELETE" })
      navigate("/events")
    }
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to={`/events/${event.id}/edit`}>Edit</Link>
        <button onClick={() => startDeleteHandler(event.id)}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;
