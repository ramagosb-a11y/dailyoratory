"use client";

import { useState } from "react";
import styles from "./VaticanI.module.css";

const questions = [
  {
    question: "How does Dei Filius describe faith and reason?",
    choices: ["They can work together in seeking truth.", "Faith requires us to stop asking questions.", "Reason can explain every revealed mystery."],
    correct: 0,
    explanation: "Faith and reason help us seek truth. Revelation also communicates mysteries beyond reason’s unaided reach. Revisit Dei Filius above.",
    section: "#faith-reason",
    revisit: "Revisit faith and reason",
  },
  {
    question: "What does papal infallibility mean?",
    choices: ["Every papal interview is free from error.", "The pope is personally sinless.", "The pope is protected from error when teaching ex cathedra under the four conditions above."],
    correct: 2,
    explanation: "Infallibility concerns a particular exercise of the teaching office, not sinlessness or every papal remark. Other authentic Church teaching still deserves a faithful response. Revisit Pastor Aeternus above.",
    section: "#papal-ministry",
    revisit: "Review the four conditions",
  },
  {
    question: "Did Vatican I introduce a general reform of the Mass?",
    choices: ["Yes; its main purpose was a general liturgical reform.", "No; its two promulgated constitutions addressed doctrine."],
    correct: 1,
    explanation: "Dei Filius and Pastor Aeternus addressed doctrine. The expanded readings and wider use of local languages associated with Vatican II belong to the later council and its implementation.",
    section: "#the-story",
    revisit: "Return to the historical setting",
  },
];

export function VaticanILearningCheck() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [resetMessage, setResetMessage] = useState("");
  const explored = Object.keys(answers).length;
  return <div className={styles.quiz}>
    <noscript><p>Enable JavaScript for the answer buttons. All of the teachings are available in the guide above.</p></noscript>
    <div className={styles.quizToolbar}><p>{explored} of {questions.length} questions explored</p><div className={styles.progressMarks} aria-hidden="true">{questions.map((question, index) => <span key={question.question} data-explored={answers[index] !== undefined} />)}</div></div>
    {questions.map((question, index) => <fieldset className={styles.question} key={question.question}>
      <legend><span>Question {index + 1} of {questions.length}</span>{question.question}</legend>
      <div className={styles.choices}>{question.choices.map((choice, choiceIndex) => <button type="button" key={choice} aria-pressed={answers[index] === choiceIndex} onClick={() => { setResetMessage(""); setAnswers(current => ({ ...current, [index]: choiceIndex })); }}><span aria-hidden="true">{String.fromCharCode(65 + choiceIndex)}</span>{choice}</button>)}</div>
      <div className={styles.feedback} data-correct={answers[index] === question.correct} aria-live="polite" aria-atomic="true">{answers[index] !== undefined && <div><p><strong>{answers[index] === question.correct ? "That’s right. " : "Take another look. "}</strong>{question.explanation}</p><a href={question.section}>{question.revisit} <span aria-hidden="true">↑</span></a></div>}</div>
    </fieldset>)}
    <div className={styles.resetRow}><button className={styles.reset} type="button" onClick={() => { setAnswers({}); setResetMessage("Answers reset. Three questions ready to explore."); }}>Reset answers <span aria-hidden="true">↺</span></button><p className={styles.resetStatus} role="status">{resetMessage}</p></div>
  </div>;
}
