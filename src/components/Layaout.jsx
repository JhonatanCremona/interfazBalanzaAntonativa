import { Outlet } from "react-router-dom"

import { NavBar } from "./NavBar"
export const Layout = () => {
    return (
        <div>
            <NavBar/>
            <hr />
            <Outlet/>
        </div>
    )
}