import { useState } from "react";
import { BagIcon, HeartIcon, SearchIcon } from "../assets/svg.jsx";
import logo from "../assets/images/nike-image.png";
import jordan from "../assets/images/jordan-image.png";
import SideMenu from "./SideMenu.jsx";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="w-full shadow-sm bg-white">
            {/* Top Bar */}
            <div className="hidden md:block bg-neutral-100 py-2 px-6 lg:px-12">
                <div className="flex justify-between items-center">
                    <img src={jordan} alt="Jordan logo" className="h-5" />
                    <ul className="flex space-x-4 text-[11px] font-bold">
                        <a href="#" className="text-black">Find a Store</a>
                        <span className="border-l border-black h-4" />
                        <a href="#" className="text-black">Help</a>
                        <span className="border-l border-black h-4" />
                        <a href="#" className="text-black">Join Us</a>
                        <span className="border-l border-black h-4" />
                        <a href="#" className="text-black">Sign in</a>
                    </ul>
                </div>
            </div>

            {/* Main Header */}
            <div className="flex items-center justify-between px-6 lg:px-12 py-4">
                {/* Left Section */}
                <div className="flex items-center">
                    <img className="h-[25px]" alt="Logo" src={logo} />
                </div>
                <div className="flex items-center space-x-3">
                    <div className="bg-gray-100 rounded-2xl w-[150px] h-10 flex items-center px-2 cursor-pointer hover:bg-gray-200">
                        <SearchIcon className="text-black" />
                        <p className="text-gray-400 ml-2">Search</p>
                    </div>
                    <button className="text-black hover:bg-gray-200 rounded-full p-2">
                        <HeartIcon />
                    </button>
                    <button className="text-black hover:bg-gray-200 rounded-full p-2">
                        <BagIcon />
                    </button>
                    <SideMenu />
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white border-t border-gray-200 py-4 px-6">
                    <nav className="flex flex-col space-y-4">
                        <a href="#" className="text-black hover:text-gray-500">New & Featured</a>
                        <a href="#" className="text-black hover:text-gray-500">Men</a>
                        <a href="#" className="text-black hover:text-gray-500">Women</a>
                        <a href="#" className="text-black hover:text-gray-500">Kids</a>
                        <a href="#" className="text-black hover:text-gray-500">Sale</a>
                    </nav>
                </div>
            )}
        </header>
    );
}

export default Header;