import { useState } from "react";
import Welcome from "../Welcome";
import "./index.css";

const Game = () => {
  const questions = [
    {
      id: 1,
      question: "Which of the following is NOT a built-in data type in Python?",
      options: ["List", "Set", "Array", "Dictionary"],
      answer: "Array",
    },
    {
      id: 2,
      question: "What is the purpose of the self keyword in Python?",
      options: [
        "It refers to the class itself.",
        "It refers to the parent class.",
        "It refers to the instance of the class.",
        "It is not used in Python.",
      ],
      answer: "It refers to the instance of the class.",
    },
    {
      id: 3,
      question: "Which of the following is a mutable data type in Python?",
      options: ["String", "Tuple", "List", "Int"],
      answer: "List",
    },
    {
      id: 4,
      question:
        "Which of the following is used to handle exceptions in Python?",
      options: ["try-catch", "catch-try", "try-except", "except-try"],
      answer: "try-except",
    },
    {
      id: 5,
      question: "print(1 == True)",
      options: ["True", "False", "None", "Error"],
      answer: "True",
    },
    {
      id: 6,
      question: "What is React primarily used for?",
      options: [
        "Building server-side applications",
        "Building user interfaces",
        "Managing databases",
        "Handling network requests",
      ],
      answer: "Building user interfaces",
    },
    {
      id: 7,
      question: "Which of the following is a key feature of React?",
      options: [
        "Two-way data binding",
        "Virtual DOM",
        "Direct DOM manipulation",
        "Global state management",
      ],
      answer: "Virtual DOM",
    },
    {
      id: 8,
      question: "What does the useState hook do in React?",
      options: [
        "It manages the lifecycle of components.",
        "It allows you to add state to functional components.",
        "It fetches data from an API.",
        "It handles side effects in components.",
      ],
      answer: "It allows you to add state to functional components.",
    },
    {
      id: 9,
      question:
        "Which lifecycle method is called after a component is mounted?",
      options: [
        "componentDidUpdate",
        "componentDidMount",
        "componentWillUnmount",
        "render",
      ],
      answer: "componentDidMount",
    },
    {
      id: 10,
      question:
        "Which of the following can be used to pass data to a component in React?",
      options: ["State", "Props", "Context", "All of the above"],
      answer: "All of the above",
    },
  ];
  const [gameStage, setGameStage] = useState("welcome");
  const [userName, setUserName] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [useraAnswer, setUserAnswer] = useState("");
  const [userCorrect, setUserCorrect] = useState(false);

  const onsubmiting = (name) => {
    setUserName(name);
    setGameStage("playing");
  };
  const renderwelcomepage = () => {
    return <Welcome name={"moulali"} submiting={onsubmiting} />;
  };

  const handleChangeOption = (event) => {
    setUserAnswer(event.target.value);

  };

  const onclickSubmitAnswer = () => {
    const { answer } = currentQuestion;
    if (useraAnswer === answer) {
      setUserCorrect(true);
    } else {
      setUserCorrect(false);
    }
  };

  const renderPlayingpage = () => {
    const { question, options } = currentQuestion;
    return (
      <div className="playing-bg-container">
        <div className="header">
          <h1 className="name">Welcome {userName}</h1>
          <div className="attemts-endpractice-container">
            <p className="attemts">0/10</p>
            <p className="endpractice">End practice</p>
          </div>
        </div>
        <div className="mcq-bg-container">
          <div className="mcq-container">
            <p className="question">{question}</p>
            <hr />
            <ul className="ul-options">
              {options.map((eachOption) => (
                <li
                  className="option"
                  key={eachOption}
                >
                  <input
                    id={eachOption}
                    type="radio"
                    value={eachOption}
                    checked={useraAnswer === eachOption}
                    onChange={handleChangeOption}
                  />
                  <label htmlFor={eachOption} className="label-option">{eachOption}</label>
                </li>
              ))}
            </ul>
            <button className="submit-btn2" onClick={onclickSubmitAnswer}>
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    );
  };

  switch (gameStage) {
    case "welcome":
      return renderwelcomepage();
    case "playing":
      return renderPlayingpage();
    default:
      return null;
  }
};
export default Game;
