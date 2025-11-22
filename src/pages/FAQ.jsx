import React, { useEffect, useState } from "react";
import "./FAQ.css";
import AOS from "aos";
import "aos/dist/aos.css";

const faqsData = [
  {
    question: "What is the deepest borewell you can drill?",
    answer: "With our state-of-the-art equipment, we can drill up to 1,500 feet. Depth may vary depending on soil conditions and water table levels in your location."
  },
  {
    question: "Which drilling techniques do you use?",
    answer: "We employ a combination of modern rotary and DTH (Down-The-Hole) drilling methods to ensure efficiency and safety."
  },
  {
    question: "How long does a typical borewell installation take?",
    answer: "Depending on depth and soil conditions, most residential borewells are completed within 3–7 days."
  },
  {
    question: "Do you provide water quality testing?",
    answer: "Yes, we offer comprehensive water testing to ensure safety and potability before the borewell is commissioned."
  },
  {
    question: "What is CGWA NOC, and is it necessary?",
    answer: "CGWA NOC (Central Ground Water Authority No Objection Certificate) is required for legal drilling. We can assist you with the process if needed."
  },
  {
    question: "Do you offer maintenance services?",
    answer: "Absolutely. Our team provides regular maintenance, pump servicing, and troubleshooting for long-lasting performance."
  },
  {
    question: "Which locations do you cover?",
    answer: "We serve across Gujarat, catering to residential, commercial, and agricultural projects."
  },
  {
    question: "Do you handle emergencies?",
    answer: "Yes, our emergency response team is available for urgent repairs and water supply solutions."
  },
  {
    question: "What is the approximate cost of drilling a borewell?",
    answer: "Pricing varies based on depth, soil type, and equipment required. Contact us for a personalized estimate."
  },
  {
    question: "Do you install solar pump systems?",
    answer: "Yes, we provide installation and integration of energy-efficient solar pumps for sustainable water solutions."
  },
  {
    question: "What is rainwater harvesting, and do you provide this?",
    answer: "Rainwater harvesting is the process of collecting and storing rainwater for reuse. We offer complete design and installation services."
  },
  {
    question: "How do you ensure water availability before drilling?",
    answer: "Our experts conduct geological surveys, soil analysis, and use advanced ground-penetrating equipment to identify water-rich zones."
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <div className="faq-header" data-aos="fade-down">
        <h1>Frequently Asked Questions</h1>
        <p>Everything you need to know about our borewell and groundwater solutions.</p>
      </div>

      <div className="faq-container">
        {faqsData.map((faq, index) => (
          <div
            key={index}
            className={`faq-card ${openIndex === index ? "open" : ""}`}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <h3>{faq.question}</h3>
              <span>{openIndex === index ? "−" : "+"}</span>
            </div>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="faq-contact" data-aos="fade-up" data-aos-delay={1200}>
        <h2>Still Have Questions?</h2>
        <p>Our experienced team is ready to guide you. Reach out for personalized advice on your borewell project.</p>
        <button className="btn-contact" onClick={() => window.location.href = "tel:+919106604895"}>Call Now</button>
      </div>
    </div>
  );
};

export default FAQ;
