import "react";
import PropTypes from "prop-types";

const Product = (props) => {
    return (
        <div className="product">
            <img
                src={props.images}
                alt={props.title}
                className="product-image w-[450px] h-[450px]"
            />
            <h2 className="product-title">{props.title}</h2>
            <p className="product-description text-gray-500">{props.description}</p>
            <p className="product-price mt-2 text-[18px]">${props.price}</p>
        </div>
    );
}

// Define prop types
Product.propTypes = {
    images: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};

export default Product;
