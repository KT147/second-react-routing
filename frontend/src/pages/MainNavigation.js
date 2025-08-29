import { NavLink } from "react-router-dom"


function MainNavigation() {
  return (
    <div>
        <button><NavLink className={({isActive}) => isActive ? "active" : undefined} to="/" end>Home</NavLink></button>
        <button><NavLink className={({isActive}) => isActive ? "active" : undefined} to="/events" end>Events Page</NavLink></button>
        <button> <NavLink className={({isActive}) => isActive ? "active" : undefined} to="/events/new" end>New Event</NavLink></button>
    </div>
  )
}

export default MainNavigation