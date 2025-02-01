import { useRef } from "react";
import Product from "./product.jsx";

const Content = () => {
    const sliderRef = useRef(null);

    const slideLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({
                left: -300,
                behavior: "smooth",
            });
        }
    };

    const slideRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({
                left: 300,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="mx-8 mb-8">
            <div className="flex items-center justify-between">
                <h1 className="mx-4 text-[25px]">Latest & Greatest</h1>
                <div className="flex gap-2 mb-3">
                    <button
                        onClick={slideLeft}
                        className="bg-gray-200 p-4 rounded-[5px] hover:bg-gray-300 focus:outline-none"
                    >
                        ◀
                    </button>
                    <button
                        onClick={slideRight}
                        className="bg-gray-200 p-4 rounded-[5px] hover:bg-gray-300 focus:outline-none"
                    >
                        ▶
                    </button>
                </div>
            </div>
            <div className="flex overflow-x-scroll gap-2" ref={sliderRef}>
                <div className="flex-shrink-0">
                    <Product
                        images="https://raw.githubusercontent.com/mehedicodes1/nike-website-clone/main/public/1.png"
                        title="Air Jordan 1 Low SE"
                        description="Men's Shoes"
                        price="180"
                    />
                </div>
                <div className="flex-shrink-0">
                    <Product
                        images="https://raw.githubusercontent.com/mehedicodes1/nike-website-clone/main/public/2.png"
                        title="Nike Pegasus Premium"
                        description="Men's Road Running Shoes"
                        price="300"
                    />
                </div>
                <div className="flex-shrink-0">
                    <Product
                        images="https://raw.githubusercontent.com/mehedicodes1/nike-website-clone/main/public/3.png"
                        title="Nike Air Force 1 '07"
                        description="Women's Road Running Shoes"
                        price="200"
                    />
                </div>
                <div className="flex-shrink-0">
                    <Product
                        images="https://raw.githubusercontent.com/mehedicodes1/nike-website-clone/main/public/4.png"
                        title="Nike Zoom Field Jaxx"
                        description="Men's Shoes"
                        price="240"
                    />
                </div>
                <div className="flex-shrink-0">
                    <Product
                        images="https://raw.githubusercontent.com/mehedicodes1/nike-website-clone/main/public/5.png"
                        title="Nike Dunk Low Retro"
                        description="Men's Shoes"
                        price="190"
                    />
                </div>
            </div>
        </div>
    );
};

export default Content;
