// src/Components/Faqs.jsx
import React from 'react';

const Faqs = () => {
    const faqData = [
        {
            question: "What is ViaVeda?",
            answer:
                "ViaVeda is a trusted platform for connecting users with verified astrologers for chat, call, and personalized consultations."
        },
        {
            question: "How do I talk to an astrologer?",
            answer:
                "Just log in, select your preferred astrologer, and choose between chat or call based on availability."
        },
        {
            question: "Is my data safe on ViaVeda?",
            answer:
                "Yes, we prioritize user privacy and follow all standard security protocols to keep your data safe."
        },
        {
            question: "Can I talk to astrologers for free?",
            answer:
                "ViaVeda offers promotional free minutes for new users on selected astrologers. Check their profiles for offers!"
        },
        {
            question: "How do I recharge my wallet?",
            answer:
                "You can recharge your wallet using secure payment gateways available on the platform like UPI, cards, or net banking."
        }
    ];

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Frequently Asked Questions</h2>
            <div className="accordion" id="faqAccordion">
                {faqData.map((faq, index) => (
                    <div className="accordion-item" key={index}>
                        <h2 className="accordion-header" id={`heading-${index}`}>
                            <button
                                className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#collapse-${index}`}
                                aria-expanded={index === 0 ? 'true' : 'false'}
                                aria-controls={`collapse-${index}`}
                            >
                                {faq.question}
                            </button>
                        </h2>
                        <div
                            id={`collapse-${index}`}
                            className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                            aria-labelledby={`heading-${index}`}
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body">
                                {faq.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faqs;
