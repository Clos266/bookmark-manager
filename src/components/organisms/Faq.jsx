import { useState } from 'react';
import Button from "../atoms/Button1";

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "What is Bookmark?",
      answer: "Bookmark is a powerful browser extension that helps you manage your favorite sites easily."
    },
    {
      question: "How can I request a new browser?",
      answer: "You can contact us directly through our support email to suggest new browsers."
    },
    {
      question: "Is there a mobile app?",
      answer: "We're working on a mobile version — stay tuned for updates!"
    },
    {
      question: "What about other Chromium browsers?",
      answer: "Yes, it works on most Chromium-based browsers such as Brave or Edge."
    }
  ];

  return (
    <section id="faq" className="faq">
      <h6>Frequently Asked Questions</h6>
      <p>Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.</p>
      <ul>
        {faqItems.map((item, index) => (
          <li key={index} className={openIndex === index ? 'open' : ''}>
            <div className="faq-question" onClick={() => toggleFaq(index)}>
              <span>{item.question}</span>
              <button className="toggle-faq">+</button>
            </div>
            <p className="faq-answer">{item.answer}</p>
          </li>
        ))}
      </ul>
      <Button>More Info</Button>
    </section>
  );
}

export default Faq;
