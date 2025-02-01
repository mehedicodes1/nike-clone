import "react";
import { EarthIcon } from "../assets/svg.jsx";
import HoverDropdown from "./DropDown.jsx";

const Footer = () => {
    return (
        <footer>
            <div className="m-10">
                <div className='bg-gray-300 px-[100px] py-[0.5px] mb-[50px] mt-[100px]'>
                </div>
                <div className='flex flex-col md:flex-row justify-around'>
                    <div className='flex flex-col text-[13px] gap-2 mb-6 md:mb-0'>
                        <a className='font-bold mb-4' href="">Resources</a>
                        <a href="">Find a Store</a>
                        <a href="">Nike Journal</a>
                        <a href="">Become a Member</a>
                        <a href="">Feedback</a>
                        <a href="">Promo Codes</a>
                    </div>
                    <div className='flex flex-col text-[13px] gap-2 mb-6 md:mb-0'>
                        <a className='font-bold mb-4' href="">Help</a>
                        <a href="">Get Help</a>
                        <a href="">Order Status</a>
                        <a href="">Shipping and Delivery</a>
                        <a href="">Returns</a>
                        <a href="">Payment Options</a>
                        <a href="">Contact Us</a>
                        <a href="">Reviews</a>
                    </div>
                    <div className='flex flex-col text-[13px] gap-2 mb-6 md:mb-0'>
                        <a className='font-bold mb-4' href="">Company</a>
                        <a href="">About Nike</a>
                        <a href="">News</a>
                        <a href="">Careers</a>
                        <a href="">Investors</a>
                        <a href="">Sustainability</a>
                    </div>
                    <div className='flex justify-center text-end items-center gap-1 hover:bg-gray-100 h-10 w-30 rounded-2xl cursor-pointer'>
                        <EarthIcon />
                        <p className={`text-[13px]`}>Bangladesh</p>
                    </div>
                </div>
                <div className={`text-[15px] flex flex-col md:flex-row gap-4 mt-15 text-gray-800 items-center`}>
                    <p className="mb-4 md:mb-0">© 2025 Nike, Inc. All rights reserved</p>
                    <HoverDropdown />
                    <a href={``}>Terms of Use</a>
                    <a href={``}>Terms of Sale</a>
                    <a href={``}>Company Details</a>
                    <a href={``}>Modern Slavery Act</a>
                    <a href={``}>Privacy & Cookie Policy</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
