import { useRef } from "react";
import Product from "./product.jsx";

const Content2 = () => {
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
                <h1 className="mx-4 text-[25px]">Shop Our Icons</h1>
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
                        images="http://www.trego.cooo.in/images/nike/5.png"
                        title="Nike Zoom Fly 6"
                        description="Road Racing Shoes"
                        price="270"
                    />
                </div>
                <div className="flex-shrink-0">
                    <Product
                        images="http://www.trego.cooo.in/images/nike/6.png"
                        title="Racer Pink"
                        description="Men's Shoes"
                        price="220"
                    />
                </div>
                <div className="flex-shrink-0">
                    <Product
                        images="http://www.trego.cooo.in/images/nike/7.png"
                        title="Nike Air Max Dn"
                        description="Men's Shoes"
                        price="240"
                    />
                </div>
                <div className="flex-shrink-0">
                    <Product
                        images="http://www.trego.cooo.in/images/nike/4.png"
                        title="Nike Pegasus Plus"
                        description="Men's Shoes"
                        price="270"
                    />
                </div>
                <div className="flex-shrink-0">
                    <Product
                        images="http://www.trego.cooo.in/images/nike/3.png"
                        title="Nike Pegasus 41"
                        description="Men's Shoes"
                        price="210"
                    />
                </div>
            </div>
        </div>
    );
};

export default Content2;
