import { Outlet } from "react-router-dom"

import { NavBar } from "./NavBar"
import { Home } from "./Home"

export const Layout = () => {
    return (
        <div>
            <Home/>
            <NavBar/>
            <hr />
            <Outlet/>
        </div>
    )
}