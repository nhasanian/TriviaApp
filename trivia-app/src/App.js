import db from './firebase.config';
import { collection, query, limit, getDocs } from 'firebase/firestore/lite';
import React, { useState, useEffect } from 'react';
import StartPage from './components/StartPage';
import ScorePage from './components/ScorePage';
import DisplayQuestion from './components/DisplayQuestion';

function App() {
  const [questions, setQuestions] = useState([]);
  const [curIndex, setCurIndex] = useState(0);
  const [numCorrect, setNumCorrect] = useState(0);
  const [name, setName] = useState("");
  const [numQ, setNumQ] = useState(10);
  const [page, setPage] = useState(1);



  const fetchQuestions = async () => {
    const myCol = collection(db, 'questions');
    const response = query(myCol, limit(numQ));
    const data = await getDocs(response);
    const qArray = data.docs.map(doc => doc.data());
    setQuestions(qArray);
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  if (questions.length > 0 && curIndex === questions.length) {
    setPage(2);
  }

  if (page === 0) {
    return 
    // (<StartPage onNameChange= { 
    //   (newVal) => setName(newVal) } 
    //   onNumQChange= { (newVal) => setNumQ(newVal) }  
    //   onPageChange= { (newVal) => setPage(newVal) } /> );
  }
  else if (page === 1) {
    return questions.length > 0 ? (
      <div className="container">
        <DisplayQuestion
          data={questions[curIndex]}
          onCurIndexChange={(newVal) => setCurIndex(newVal)}
          index={curIndex}
          onSetNumCorrect={(newVal) => setNumCorrect(newVal)}
          myNumCorrect={numCorrect} />
      </div>
    ) : (
      <h2 className="text-4xl"> Loading...</h2>
    );
  }
  else if (page === 2) {
    return questions.length > 0 ? (
      <div className="container">
        <ScorePage myNumCorrect={numCorrect}
          myName={name}
          myQuestions={questions} />
      </div>) : (
      <h2 className="text-4xl"> Loading...</h2>
    );
  } else {
    return (<h1>Hey therw</h1>);
  }

}

export default App;
