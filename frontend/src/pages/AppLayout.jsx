import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

function AppLayout() {
    return (
        <> 
            <header className="bg-red-500 text-white">
                <Navbar/>
            </header>

            <main>
                <Outlet/>
            </main>
        </>
    )
}

export default AppLayout
