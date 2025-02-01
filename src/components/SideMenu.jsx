import { useState } from "react";
import { MenuIcon } from "../assets/svg.jsx"; // Ensure you import the MenuIcon
import Jordan from "../assets/images/jordan-image.png";
import { BagIcon, HelpIcon, BucketIcon, StoreIcon } from "../assets/svg.jsx";

function SideMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="md:hidden">
            {/* Menu Toggle Button */}
            <button onClick={toggleMenu} className="text-black mx-2 items-center">
                <MenuIcon />
            </button>

            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-gray-800 bg-opacity-50 z-40 transform transition-all ${
                    isOpen ? "block" : "hidden"
                }`}
                onClick={toggleMenu}
            ></div>

            {/* Side Menu */}
            <div
                className={`fixed left-0 top-0 h-full bg-white z-50 w-72 p-6 transform transition-transform ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                {/* Header Section */}
                <div className="flex justify-between items-center mb-6">
                    <img src={Jordan} alt="Jordan logo" className="h-8" />
                    <button
                        onClick={toggleMenu}
                        className="text-2xl font-bold text-black"
                    >
                        ✕
                    </button>
                </div>

                {/* Navigation Links */}
                <ul className="space-y-6 text-lg font-medium">
                    <li>
                        <a href="#new" className="flex justify-between items-center hover:text-gray-600">
                            New & Featured <span className="text-gray-400">&#8250;</span>
                        </a>
                    </li>
                    <li>
                        <a href="#men" className="flex justify-between items-center hover:text-gray-600">
                            Men <span className="text-gray-400">&#8250;</span>
                        </a>
                    </li>
                    <li>
                        <a href="#women" className="flex justify-between items-center hover:text-gray-600">
                            Women <span className="text-gray-400">&#8250;</span>
                        </a>
                    </li>
                    <li>
                        <a href="#kids" className="flex justify-between items-center hover:text-gray-600">
                            Kids <span className="text-gray-400">&#8250;</span>
                        </a>
                    </li>
                </ul>

                {/* Membership Section */}
                <div className="mt-10">
                    <h2 className="text-sm font-bold mb-2">Become a Nike Member</h2>
                    <p className="text-sm text-gray-500 mb-4">
                        For the best products, inspiration, and stories in sport.{" "}
                        <a href="#learn-more" className="underline">
                            Learn more
                        </a>
                    </p>
                    <div className="flex space-x-4">
                        <button className="px-4 py-2 bg-black text-white rounded-full">
                            Join Us
                        </button>
                        <button className="px-4 py-2 border border-black text-black rounded-full">
                            Sign In
                        </button>
                    </div>
                </div>

                {/* Footer Links */}
                <ul className="mt-10 space-y-4 text-sm text-gray-600">
                    <li className="flex items-center">
                        <span className="mr-2"><HelpIcon/></span>
                        <a href="#help" className="hover:underline">Help</a>
                    </li>
                    <li className="flex items-center">
                        <span className="mr-2"><BagIcon/></span>
                        <a href="#bag" className="hover:underline">Bag</a>
                    </li>
                    <li className="flex items-center">
                        <span className="mr-2"><BucketIcon/></span>
                        <a href="#orders" className="hover:underline">Orders</a>
                    </li>
                    <li className="flex items-center">
                        <span className="mr-2"><StoreIcon/></span>
                        <a href="#store" className="hover:underline">Find a Store</a>
                    </li>
                </ul>

            </div>
        </div>
    );
}

export default SideMenu;
