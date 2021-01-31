import React from 'react';
import { Modal } from '../../context/modal';
import './index.css';

// Hello
function ReviewFormModal({setShowModal}) {

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
                    />
                </div>
                <div className="rating-input-container">
                    <input className="rating-input"
                    type="text"
                    placeholder=".../10"
                    />
                </div>
                <div className="body-input-container">
                    <input className="body-input"
                    type="text-area"
                    placeholder="your text here..."
                    />
                </div>
                <div className="x-button-container">
                    <button id="close-button" onClick={(e) => setShowModal(false)}><i id="close-icon" class="far fa-window-close"></i></button>
                </div>
                <div className="submit-button-holder">
                    <button id="submit-button" onClick={(e) => setShowModal(false)}>Submit</button>
                </div>
            </div>

        </Modal>
    </>
  );
}

export default ReviewFormModal;
