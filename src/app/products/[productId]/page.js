import React from 'react';

const ProductDetail = ({ params}) => {
    // Fetch product details based on the productId
    // ...
    

    return (
        <div>
            <h1>Product Detail</h1>
            <p>Product ID: {params.productId}</p>
            {/* Display product details */}
            {/* ... */}
        </div>
    );
};

export default ProductDetail;
