import db from './firebase.config';
import { collection, query, limit, getDocs } from 'firebase/firestore/lite';
import React, { useState, useEffect } from 'react';
import StartPage from './components/StartPage';
import ScorePage from './components/ScorePage';
import DisplayQuestion from './components/DisplayQuestion';

function App() {
  const [questions, setQuestions] = useState([]);
  const [chosenAnswers, setChosenAnswers] = useState([]);
  const [curIndex, setCurIndex] = useState(0);
  const [numCorrect, setNumCorrect] = useState(0);
  const [name, setName] = useState("");
  const [numQ, setNumQ] = useState(10);
  const [hasHitButton, setHasHitButton] = useState(false);


  useEffect(() => {
    const fetchQuestions = async () => {
      const myCol = collection(db, 'questions');
      const response = query(myCol, limit(numQ));
      const data = await getDocs(response);
      const qArray = data.docs.map(doc => doc.data());
      setQuestions(qArray);
    };

    fetchQuestions();
  }, [numQ]);

  if (!hasHitButton) {
    return (<StartPage onNameChange= { 
      (newVal) => setName(newVal) } 
      onNumQChange= { (newVal) => setNumQ(newVal) }
      onHasHitButton= {(newVal) => setHasHitButton(newVal) } /> );
  }
  if (curIndex < questions.length) {
    return questions.length > 0 ? (
      <div className="container">
        <DisplayQuestion
          data={questions[curIndex]}
          onCurIndexChange={(newVal) => setCurIndex(newVal)}
          index={curIndex}
          onSetNumCorrect={(newVal) => setNumCorrect(newVal)}
          myNumCorrect={numCorrect}
          myChosenAnswers = {chosenAnswers}
          onAnswerChoice = {(newVal) => setChosenAnswers(newVal) }
           />
      </div>
    ) : (
      <h2 className="text-4xl"> Loading...</h2>
    );
  }
  return questions.length > 0 ? (
    <div className="container-fluid">
      <ScorePage myNumCorrect={numCorrect}
        myName={name}
        myQuestions={questions}
        myChosenAnswers = {chosenAnswers} />
    </div>) : (
    <h2 className="text-4xl"> Loading...</h2>
  );

}

export default App;
