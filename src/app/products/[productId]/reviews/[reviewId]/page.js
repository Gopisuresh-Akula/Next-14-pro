import React from 'react';
import {notFound} from 'next/navigation';
const ReviewDetails = ({ params }) => {

    if (parseInt(params.reviewId) > 12) {
        return notFound();
    }
    return (
        <div>
            <h2>Review Details</h2>
            <p>product {params.productId}   Review ID: {params.reviewId}</p>
            {/* <p>Product ID: {review.productId}</p>
            <p>Rating: {review.rating}</p>
            <p>Comment: {review.comment}</p> */}
        </div>
    );
};

export default ReviewDetails;
