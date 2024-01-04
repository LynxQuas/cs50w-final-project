import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import NavItems from "./NavItems";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const openMenuHandler = () => {
        setIsMenuOpen(true);
    }

    const closeMenuHandler = () => {
        setIsMenuOpen(false)
    }

    return (
        <div className="flex py-7 px-10 items-center justify-between">
    
            <div className={`${isMenuOpen ? "hidden" : ""} md:block`}>logo</div>

            <NavItems isMenuOpen={isMenuOpen}/>
        
            <HamburgerMenu 
            openMenuHandler={openMenuHandler} 
            isMenuOpen={isMenuOpen} 
            closeMenuHandler={closeMenuHandler}/>

        </div>
    )
}

export default Navbar

