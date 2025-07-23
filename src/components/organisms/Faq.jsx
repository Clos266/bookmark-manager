import { useState } from "react";
import Button from "../atoms/ButtonWeb";

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (clickedIndex) => {
    const isAlreadyOpen = openIndex === clickedIndex;

    if (isAlreadyOpen) {
      setOpenIndex(null);
    } else {
      setOpenIndex(clickedIndex);
    }
  };

  const faqItems = [
    {
      question: "What is Bookmark?",
      answer:
        "Bookmark is a powerful browser extension that helps you manage your favorite sites easily.",
    },
    {
      question: "How can I request a new browser?",
      answer:
        "You can contact us directly through our support email to suggest new browsers.",
    },
    {
      question: "Is there a mobile app?",
      answer: "We're working on a mobile version — stay tuned for updates!",
    },
    {
      question: "What about other Chromium browsers?",
      answer:
        "Yes, it works on most Chromium-based browsers such as Brave or Edge.",
    },
  ];

  return (
    <section id="faq" className="faq">
      <h6>Frequently Asked Questions</h6>
      <p>
        Here are some of our FAQs. If you have any other questions you'd like
        answered please feel free to email us.
      </p>
      <ul>
        {faqItems.map((item, currentIndex) => {
          const shouldBeOpen = openIndex === currentIndex;
          const cssClass = shouldBeOpen ? "open" : "";

          return (
            <li key={currentIndex} className={cssClass}>
              <div
                className="faq-question"
                onClick={() => {
                  toggleFaq(currentIndex);
                }}
              >
                <span>{item.question}</span>
                <button className="toggle-faq">
                  {shouldBeOpen ? "+" : "+"}
                </button>
              </div>
              <p className="faq-answer">{item.answer}</p>
            </li>
          );
        })}
      </ul>
      <Button>More Info</Button>
    </section>
  );
}

export default Faq;
