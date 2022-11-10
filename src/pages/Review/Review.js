import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import PageTitle from '../../contexts/PageTitle';
import ReviewRow from './ReviewRow';

const Review = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel this order');
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = reviews.filter(rev => rev._id !== id);
                        setReviews(remaining);
                    }
                })
        }
    }

    return (
        <>
            <PageTitle title='My Review'> </PageTitle>
            <div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">

                        <tbody>

                            {
                                reviews.map(review => <ReviewRow
                                    key={review.id}
                                    review={review}
                                    handleDelete={handleDelete}
                                ></ReviewRow>)
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </>
    );
};

export default Review;