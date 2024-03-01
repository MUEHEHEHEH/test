import Button from "../elements/button/button";

const CardProduct = (props) => {
    const {children} = props;
    return(
        <div className="w-full max-w-sm bg-gray-800 border border-gray-200 rounded-lg shadow">
            {children}
        </div>
    );
};

const Body = (props) => {
    const {children, name} = props;
    return(
        <div className="px-5 pb-5">
            <a href="">
                <h5 className="text-xl font-semibold tracking-tight text-white">{name}</h5>
                <p className="text-m text-white">{children}</p>
            </a>
        </div>
    );
};

const Footer = (props) => {
    const {children, price} = props;
    return(
        <div className="flex items-center justify-between px-5 pb-5">
            <span className="text-xl font-bold text-white">{price}</span>0
            <Button variant="bg-blue-600">{children}</Button>
        </div>
    );
};

const Header = (props) => {
    const {image} = props;
    return(
        <a href="#">
            <img src={image} alt="product" className="p-8 rounded-t-lg" />
        </a>
    );
};

CardProduct.Header = Header;
CardProduct.Footer = Footer;
CardProduct.Body = Body;

export default CardProduct;