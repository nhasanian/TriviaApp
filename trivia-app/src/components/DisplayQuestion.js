const DisplayQuestion = ({ data, onCurIndexChange, index, onSetNumCorrect }) => {
    
    return (
        <div className = "text-white">
            <div className="bg-gray-500 p-40 rounded-lg shadow-md">
                <h2 className="text-4xl">{data.question}</h2>
                <div className="mt-8">
                    <button className="text-xl bg-green-500 w-1/2 p-5 font-semibold rounded-lg shadow"> True</button>
                    <button className="text-xl bg-red-500 w-1/2 p-5 font-semibold rounded-lg shadow"
                    onClick= { onSetNumCorrect(index+1) }> False</button>
                </div>
            </div>
        </div>
    );
}

export default DisplayQuestion;