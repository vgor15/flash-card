import "./.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

const questions = [
  {
    id: 1,
    question: "What is the purpose of the 'useState' hook in React?",
    answer:
      "The 'useState' hook allows functional components to manage local state.",
    topic: "React",
  },
  {
    id: 2,
    question: "What does the 'DOCTYPE' declaration do in HTML?",
    answer:
      "The 'DOCTYPE' declaration tells the browser which version of HTML to use.",
    topic: "HTML",
  },
  {
    id: 3,
    question:
      "What is the difference between 'absolute' and 'relative' positioning in CSS?",
    answer:
      "'Absolute' positioning removes the element from the normal document flow, while 'relative' positioning moves the element relative to its original position.",
    topic: "CSS",
  },
  {
    id: 4,
    question: "What is event delegation in JavaScript?",
    answer:
      "Event delegation is a technique where a parent element handles events for its child elements using event bubbling.",
    topic: "JavaScript",
  },
  {
    id: 5,
    question: "What is the 'key' prop in React and why is it important?",
    answer:
      "The 'key' prop is used in lists to help React identify which items have changed, are added, or are removed for efficient re-rendering.",
    topic: "React",
  },
  {
    id: 6,
    question: "What is the difference between '==' and '===' in JavaScript?",
    answer:
      "'==' checks for value equality with type coercion, while '===' checks for both value and type equality.",
    topic: "JavaScript",
  },
];

function FlashCards() {
  const [flippedCards, setFlippedCards] = useState({});

  const toggleFlip = (id) => {
    setFlippedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="flashcards">
      {questions.map((q) => (
        <div
          key={q.id}
          className={`card ${flippedCards[q.id] ? "flipped" : ""}`}
          onClick={() => toggleFlip(q.id)}
        >
          <div className="card-inner">
            <div className="card-front">
              <p>{q.question}</p>
            </div>
            <div className="card-back">
              <p>{q.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
