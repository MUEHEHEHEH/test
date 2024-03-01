import React from "react";
import CardProduct from "../Components/fragments/CardProduct";

const products = [
    {
        id:1,
        name:"Jelly",
        price:"Rp 1.000.000",
        image :"/images/jelly.jpg",
        description : `Lorem ipsum dolor sit`,
        button : 'Add to cart'
    },
    {
        id:2,
        name:"JellyFish2",
        price:"Rp 5.000.000",
        image :"/images/jelly.jpg",
        description : `Lorem ipsum dolor sit abc`,
        button : 'Add to cart'
    },
    {
        id:3,
        name:"JellyFish3",
        price:"Rp 3.000.000",
        image :"/images/jelly.jpg",
        description : `Lorem ipsum dolor sit aaa`,
        button : 'Add to cart'
    },
];

const ProductPage = () => {
    return (
        <div className="flex justify-center py-5 px-5 mr-5">
            {products.map((product) => (
                <div key={product.id} className="mr-5">
                    <CardProduct>
                        <CardProduct.Header image = {product.image}/>
                        <CardProduct.Body name = {product.name}>
                            {product.description}
                        </CardProduct.Body>
                        <CardProduct.Footer price = {product.price}>
                            {product.button}
                        </CardProduct.Footer>
                    </CardProduct>
                </div>
            ))}
        </div>
    );
};



export default ProductPage;
