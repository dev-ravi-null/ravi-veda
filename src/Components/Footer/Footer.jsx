import React from 'react';
import '../../Theme.css'
const Footer = () => {
    return (
        <footer className="bg-primary text-light pt-4">
            <div className="container">
                <div className="row">
                    {/* Logo and Description */}
                    <div className="col-md-4 mb-3">
                        <img
                            src="https://www.viaveda.in/static/logo/logo.png"
                            alt="ViaVeda Logo"
                            className="mb-2"
                            style={{ maxWidth: '150px' }}
                        />
                        <p>
                            At Via Veda, we are here to guide you. Our Jyotish astrology services provide helpful insights for your career, finances, health, and relationships.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-md-2 mb-3">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="/" className="text-light">Home</a></li>
                            <li><a href="/others/about-us" className="text-light">About Us</a></li>
                            <li><a href="/others/terms-of-use" className="text-light">Terms of Use</a></li>
                            <li><a href="/others/privacy-policy" className="text-light">Privacy Policy</a></li>
                            <li><a href="/others/support" className="text-light">Support</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="col-md-3 mb-3">
                        <h5>Services</h5>
                        <ul className="list-unstyled">
                            <li><a href="/kundli" className="text-light">Kundli</a></li>
                            <li><a href="/kundli-matching" className="text-light">Kundli Matching</a></li>
                            <li><a href="/horoscope" className="text-light">Horoscope</a></li>
                            <li><a href="/live" className="text-light">Live Sessions</a></li>
                            <li><a href="/communication-list?specialty=Relationships" className="text-light">Astrologers</a></li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div className="col-md-3 mb-3">
                        <h5>Contact Us</h5>
                        <p>Email: <a href="mailto:support@viaveda.in" className="text-light">support@viaveda.in</a></p>
                        <p>Phone: +91-XXXXXXXXXX</p>
                        <div>
                            <a href="https://www.facebook.com/viaveda" className="text-light me-2"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://www.twitter.com/viaveda" className="text-light me-2"><i className="fab fa-twitter"></i></a>
                            <a href="https://www.instagram.com/viaveda" className="text-light"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center py-3">
                    <p className="mb-0">&copy; {new Date().getFullYear()} ViaVeda. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
