import "react"
import Content from "./Content.jsx";
import Content2 from "./Content2.jsx";

function Body() {

    return (
        <div>
            <img src="https://raw.githubusercontent.com/mehedicodes1/nike-website-clone/main/public/nike-just-do-it.jpg" alt=""/>
            <div className="flex flex-col justify-center items-center text-black mb-[100px]">
                <h2 className="mb-4 max-w-[600px] text-[21px] text-center mt-12">Step into the heart of Naples with the Nike Field General — an icon plucked from the archive and the perfect canvas for your personal style.</h2>
                <button className="bg-black rounded-2xl text-white px-4 py-1 hover:bg-gray-700 cursor-pointer">
                    Discover the Collection
                </button>
            </div>
            <Content/>
            <Content2/>
        </div>
    )

}

export default Body;