import React, { useState } from 'react';
import '../Assets/CSS/faq.css'; // Assuming your CSS file path is correct

const Faqjsx = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqData = [
    {
      question: 'How do I recharge my mobile?',
      answer: 'You can recharge your mobile by logging into your account, selecting your mobile number, choosing a recharge plan, and making a payment through your preferred payment method.'
    },
    {
      question: 'What payment methods are accepted?',
      answer: 'We accept a variety of payment methods, including credit/debit cards, net banking, and digital wallets such as Paytm, Google Pay, and PhonePe.'
    },
    {
      question: 'Is it safe to use my credit card for recharges?',
      answer: 'Yes, it is safe to use your credit card for recharges on our portal. We use secure encryption technology to protect your payment information.'
    },
    {
      question: 'How long does it take for the recharge to reflect on my mobile?',
      answer: 'Recharge times may vary depending on your mobile service provider. Typically, it should reflect within a few minutes, but it could take up to 24 hours in some cases.'
    },
    {
      question: 'What are the benefits under this program?',
      answer: 'Jio Thanks offers a variety of exclusive rewards, perks & privileges. These benefits are customized depending on the plan of the customer. Customers can view and claim all the eligible benefits on Jio Thanks App. Some of these benefits are given below: Amazon Prime membership at no extra cost'
    },
    {
      question: 'I have an Jio broadband connection, but do not have an Jio SIM. Can I still get Jio Thanks benefits?',
      answer: 'Of course. You can view and claim your Jio Thanks rewards by logging on to Jio Thanks App with your registered mobile number.'
    }
  ];

  const toggleAccordion = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div>
      <div className="faq-container">
        <h2>Frequently Asked Questions</h2>

        <ul className="faq-list">
          {faqData.map((faq, index) => (
            <li key={index} className={`faq-item ${index === expandedIndex ? 'expanded' : ''}`}>
              <div className="faq-question" onClick={() => toggleAccordion(index)}>
                <span className="question-icon">Q</span>
                {faq.question}
              </div>
              <div className="faq-answer">
                <span className="answer-icon">*</span>
                {faq.answer}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Faqjsx;
