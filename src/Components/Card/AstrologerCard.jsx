import React, { useState } from 'react';
import astrologers from './astrologersData';

const AstrologerCard = () => {
    const [showAll, setShowAll] = useState(false);
    const visibleAstrologers = showAll ? astrologers : astrologers.slice(0, 4);

    return (
        <div className="container mt-5">
            <div className="row">
                {visibleAstrologers.map((astro) => (
                    <div className="col-12 col-md-6 mb-4" key={astro.id}>
                        <div className="card h-100 shadow">
                            <div className="row g-0">
                                {/* Profile Section */}
                                <div className="col-md-5 text-center p-3">
                                    <img
                                        src={astro.image}
                                        alt={astro.name}
                                        className="img-fluid rounded-circle mb-3"
                                        style={{ maxWidth: '120px' }}
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
                                    <button className="btn btn-primary btn-sm mb-2 w-100">Follow</button>
                                    <button className="btn btn-success btn-sm w-100">FIRST CHAT FREE</button>
                                </div>

                                {/* About & Reviews */}
                                <div className="col-md-7 p-3">
                                    <h6>About</h6>
                                    <p style={{ fontSize: '0.9rem' }}>{astro.about.slice(0, 200)}...</p>
                                    <button className="btn btn-warning btn-sm w-100 mb-2">Send Gift to {astro.name}</button>

                                    <h6>Rating and Reviews ({astro.reviews.length})</h6>
                                    <div className="progress mb-2" style={{ height: '8px' }}>
                                        <div
                                            className="progress-bar"
                                            style={{ width: `${astro.rating * 20}%` }}
                                        />
                                    </div>
                                    {astro.reviews.slice(0, 1).map((review, i) => (
                                        <div key={i} style={{ fontSize: '0.85rem' }}>
                                            <strong>{review.user}</strong> {'⭐'.repeat(review.rating)}
                                            <p>{review.comment}</p>
                                        </div>
                                    ))}

                                    <h6 className="mt-2">Availability</h6>
                                    <div className="d-flex flex-wrap">
                                        {astro.availability.map((day, i) => (
                                            <span key={i} className="badge bg-secondary m-1">{day}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {!showAll && astrologers.length > 5 && (
                <div className="text-center">
                    <button className="btn btn-outline-primary" onClick={() => setShowAll(true)}>Show More</button>
                </div>
            )}
        </div>
    );
};

export default AstrologerCard;
