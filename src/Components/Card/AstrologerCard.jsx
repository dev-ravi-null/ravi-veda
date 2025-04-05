import React from 'react';
import astrologers from './astrologersData';

const AstrologerCard = () => {
    return (
        <div className="container mt-5">
            {astrologers.map((astro) => (
                <div className="card mb-5 shadow" key={astro.id}>
                    <div className="row g-0">
                        <div className="col-md-4 text-center p-4">
                            <img
                                src={astro.image}
                                alt={astro.name}
                                className="img-fluid rounded-circle mb-3"
                                style={{ maxWidth: '180px' }}
                            />
                            <h5>{astro.name}</h5>
                            <div><span className="badge bg-warning text-dark">{astro.rating} ⭐</span></div>
                            <div className="my-2">
                                {astro.languages.map((lang, i) => (
                                    <span key={i} className="badge bg-info text-light me-2">{lang}</span>
                                ))}
                                <span className="badge bg-info text-light">{astro.experience}</span>
                            </div>
                            <h6>₹ {astro.price}/min</h6>
                            <button className="btn btn-primary mb-2 w-100">Follow</button>
                            <button className="btn btn-success w-100">FIRST CHAT FREE</button>
                        </div>

                        <div className="col-md-8 p-4">
                            <h4>About</h4>
                            <p>{astro.about}</p>
                            <button className="btn btn-warning w-100 mb-3">Send Gift to {astro.name}</button>

                            <h5>Rating and Reviews ({astro.reviews.length})</h5>
                            <div className="progress mb-3" style={{ height: '10px' }}>
                                <div
                                    className="progress-bar"
                                    style={{ width: `${astro.rating * 20}%` }}
                                />
                            </div>
                            {astro.reviews.map((review, i) => (
                                <div key={i}>
                                    <strong>{review.user}</strong> {'⭐'.repeat(review.rating)}
                                    <p>{review.comment}</p>
                                </div>
                            ))}

                            <h5 className="mt-4">Availability</h5>
                            <div className="d-flex flex-wrap">
                                {astro.availability.map((day, i) => (
                                    <span key={i} className="badge bg-secondary m-1">{day}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AstrologerCard;
