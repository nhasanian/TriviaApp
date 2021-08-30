import db from './firebase.config';
import {collection, query, limit, getDocs} from 'firebase/firestore/lite';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import DisplayQuestion from './components/DisplayQuestion';
import React, {useState,useEffect} from 'react';
import StartPage from './components/StartPage';

function App() {
  const [questions, setQuestions] = useState([]);
  const [curIndex, setCurIndex] = useState(0);
  const [numCorrect, setNumCorrect] = useState(0);
  const [name, setName] = useState("");
  const [numQ, setNumQ] = useState(10);



  const fetchQuestions= async() =>{
    const myCol = collection(db, 'questions');
    const response = query(myCol, limit(2)) 
    const data = await getDocs(response);
    const qArray = data.docs.map(doc  => doc.data());
    setQuestions(qArray);
  };

  useEffect(() => {
    fetchQuestions(); 
  }, []);
  
  return questions.length ? (
    <div className="container">
      {/* <StartPage onNameChange= { (newVal) => setName(newVal) } onNumQChange= { (newVal) => setNumQ(newVal) } /> */}
      <DisplayQuestion data = {questions[1]} onCurIndexChange= { (newVal) => setCurIndex(newVal) } index = { curIndex }
      onSetNumCorrect= { (newVal) => setNumCorrect(newVal) } />  
  </div>
  ) : (
    <h2 className="text-4xl"> Loading...</h2>
  );
}

export default App;
