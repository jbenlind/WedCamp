import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
import { Modal } from '../../context/modal';
import {submitNewReview} from '../../store/venues';
import './Modal.css';

function ReviewFormModal({setShowModal}) {
    const [rating, setRating] = useState("");
    const [title, setTitle] = useState("");
    const [reviewBody, setReviewBody] = useState("");
    const {venueId} = useParams();
    const dispatch = useDispatch();

    const sessionUser = useSelector(state => state.session.user);

    const onSubmit = (event) => {
        event.preventDefault();

        const formInfo = {
            userId: sessionUser.id,
            venueId,
            rating,
            title,
            reviewBody,
            verifiedBooking: true
        }
        dispatch(submitNewReview(formInfo));
    }

  return (
    <>

        <Modal onClose={() => setShowModal(false)}>

            <div className="review-grid">

                <p className="review-form-header">Submit a review</p>
                <p className="add-title">Add a title</p>
                <p className="add-rating">Give a rating</p>
                <p className="add-body">Tell us about your experience</p>
                <div className="title-input-container">
                    <input className="title-input"
                    type="text"
                    placeholder="Title..."
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    />
                </div>
                <div className="rating-input-container">
                    <input className="rating-input"
                    type="text"
                    placeholder=".../10"
                    value={rating}
                    onChange={(event) => setRating(event.target.value)}
                    />
                </div>
                <div className="body-input-container">
                    <input className="body-input"
                    type="text-area"
                    placeholder="your text here..."
                    value={reviewBody}
                    onChange={(event) => setReviewBody(event.target.value)}
                    />
                </div>
                <div className="x-button-container">
                    <button id="close-button" onClick={(event) => setShowModal(false)}><i id="close-icon" className="far fa-window-close"></i></button>
                </div>
                <div className="submit-button-holder">
                    <button id="submit-button" onClick={(event) => {
                        onSubmit(event)
                        setShowModal(false)}}>Submit</button>
                </div>
            </div>

        </Modal>
    </>
  );
}

export default ReviewFormModal;
