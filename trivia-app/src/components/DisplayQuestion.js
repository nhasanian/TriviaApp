const DisplayQuestion = ({
    data,
    onCurIndexChange,
    index,
    onSetNumCorrect,
    myNumCorrect,
    myChosenAnswers,
    onAnswerChoice }) => {

    return (
        <div className="text-white">
            <div className="bg-gray-500 p-40 rounded-lg shadow-md">
                <h2 className="text-4xl">{data.question}</h2>
                <div className="mt-8">
                    <button className="text-xl bg-green-500 w-1/2 p-5 font-semibold rounded-lg shadow"
                        onClick={() =>
                            clickedTrue(data, onCurIndexChange, index, onSetNumCorrect, myNumCorrect, myChosenAnswers, onAnswerChoice)
                        }> True</button>
                    <button className="text-xl bg-red-500 w-1/2 p-5 font-semibold rounded-lg shadow"
                        onClick={() =>
                            clickedFalse(data, onCurIndexChange, index, onSetNumCorrect, myNumCorrect, myChosenAnswers, onAnswerChoice)}> False</button>
                </div>
            </div>
        </div>
    );
}

const clickedTrue = (data, onCurIndexChange, index, onSetNumCorrect, myNumCorrect, myChosenAnswers, onAnswerChoice) => {
    if (data.answer === 'True') {
        onSetNumCorrect(myNumCorrect + 1);
    }
    onAnswerChoice([...myChosenAnswers, 'True']);

    onCurIndexChange(index + 1);
}

const clickedFalse = (data, onCurIndexChange, index, onSetNumCorrect, myNumCorrect, myChosenAnswers, onAnswerChoice) => {
    if (data.answer === 'False') {
        onSetNumCorrect(myNumCorrect + 1);
    }
    onAnswerChoice([...myChosenAnswers, 'False']);

    onCurIndexChange(index + 1);
}
export default DisplayQuestion;