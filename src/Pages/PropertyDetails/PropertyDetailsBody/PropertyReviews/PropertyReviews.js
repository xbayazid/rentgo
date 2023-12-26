import React, { useContext, useState } from 'react';
import SingleReviewCard from './SingleReviewCard';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../../contexts/AuthProvider';
import { useNavigate } from 'react-router-dom';
import Loader from '../../../../components/Loader/Loader';

const PropertyReviews = ({ id }) => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [lastIndex, setLastIndex] = useState(3);
    // console.log(review)
    const { data: reviews = [], refetch, isLoading } = useQuery({
        queryKey: ['review'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/propertyDetails/${id}/review`);
            const data = await res.json();
            return data;
        }
    });

    if (isLoading) {
        return <Loader />
    }

    const handleSlice = () => {
        setLastIndex(lastIndex + 3);
    }

    const updateReview = [...reviews].reverse().slice(0, lastIndex);

    const handleReview = event => {
        event.preventDefault();


        // console.log(newReview)

        if (!user) {
            navigate('/login');
        }
        else {
            const form = event.target;
            const name = form.name.value;
            const img = user?.photoURL;
            const comment = form.comment.value;
            let ratting = form.ratting.value;

            if (ratting > 5) {
                ratting = 4.5;
            }

            const newReview = {
                name: name,
                img: img,
                comment: comment,
                ratting: ratting
            }
            fetch(`http://localhost:5000/propertyDetails/${id}/review`, {
                method: 'PUT',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(newReview)
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    form.reset();
                    refetch();
                })
        }
    }

    return (
        <div className='bg-white shadow-md rounded p-5 my-8'>
            <h2 className="text-2xl font-semibold">Reviews ({reviews.length})</h2>
            {
                updateReview.map((review, idx) =>
                    <SingleReviewCard key={idx} review={review} />
                )
            }
            {
                reviews.length >= 4 &&
                <div className='text-center mb-5'>
                <button className='btn btn-primary' onClick={handleSlice}>View More</button>
            </div>
            }
            <hr />
            <h2 className="text-2xl font-semibold mt-5">Rate us and Write a Review</h2>
            <form onSubmit={handleReview} className='my-5'>
                <input type="text" name='name' placeholder='Enter Your Name' className='border-2 h-12 w-[48%] pl-3' />
                <input type="number" name='ratting' placeholder='Enter Your Ratting out of 5' className='border-2 h-12 w-[48%] pl-3 ml-[4%]' />
                <textarea name="comment" placeholder='Enter your comment' className='border-2 mt-3 w-full h-32 pl-3'></textarea>
                <button type="submit" className="btn btn-block btn-primary mt-3">comment</button>
            </form>
        </div>
    );
};

export default PropertyReviews;