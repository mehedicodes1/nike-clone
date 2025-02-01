import 'react';

function HoverDropdown() {
    return (
        <div className="relative inline-block text-left">
            <div className="group">
                <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md px-4 py-2 text-gray-800"
                >Guides
                    <svg
                        className="-mr-1 ml-2 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.292 7.707a1 1 0 011.414 0L10 11l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>

                <div className="absolute w-56 ring-1 ring-gray-200 rounded-b-sm ring-opacity-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="py-1">
                        <a href="#option1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Nike Air</a>
                        <a href="#option2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Nike Air Max</a>
                        <a href="#option3" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Nike Pegasus</a>
                        <a href="#option3" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Nike React</a>
                        <a href="#option3" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Nike Vaporfly</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HoverDropdown;
