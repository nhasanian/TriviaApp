import * as ReactBootStrap from "react-bootstrap";

const ScorePage = ({
    myNumCorrect,
    myName,
    myQuestions,
    myChosenAnswers }) => {
    return (
        <div className="text-white overflow-ellipsis">
            <div className="bg-gray-500 p-40 rounded-lg shadow-md text-2xl">
                <h1> Congratulations {myName}, you got {myNumCorrect} questions correct! </h1>
            </div>
            <div>
                <ReactBootStrap.Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Question</th>
                            <th>Correct Answer</th>
                            <th>Your Answer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myQuestions.map((question, index) => renderQuestions(question, index, myChosenAnswers[index]))}
                    </tbody>
                </ReactBootStrap.Table>
            </div>
        </div>
    );
}

const renderQuestions = (myQuestions, index, myChosenAnswers) => {
    return (
        <tr key={index}>
            <td> {myQuestions.question} </td>
            <td> {myQuestions.answer} </td>
            <td> {myChosenAnswers} </td>
        </tr>
    );
}

export default ScorePage;