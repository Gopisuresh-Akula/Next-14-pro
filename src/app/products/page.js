import React from 'react';

const Product = ({ name, price }) => {
    return (
        <div>
            <h3>{name}</h3>
            <p>Price: ${price}</p>
        </div>
    );
};

const ProductsPage = () => {
    const products = [
        { name: 'Product 1', price: 10 },
        { name: 'Product 2', price: 20 },
        { name: 'Product 3', price: 30 },
    ];

    return (
        <div>
            <h2>Products</h2>
            {products.map((product, index) => (
                <Product key={index} name={product.name} price={product.price} />
            ))}
        </div>
    );
};

export default ProductsPage;
