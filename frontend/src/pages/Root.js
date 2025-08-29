import { Outlet } from "react-router-dom"
import MainNavigation from "../components/MainNavigation"

function Root() {

  // const navigation = useNavigate()


  return (
    <div>
        <MainNavigation/>
        <main>
         {/* {navigation.state === "loading" &&  <p>Loading...</p>} */}
            <Outlet/>
        </main>
    </div>
  )
}

export default Root