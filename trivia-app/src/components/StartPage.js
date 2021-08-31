const StartPage = ( {
    onNameChange, 
    onNumQChange, 
    onHasHitButton}) => {
    
        return (
        <div className="font-semibold">
            <div className="bg-gray-500 p-40 rounded-lg shadow-md text-center">
                <h2 className="text-4xl text-white">Welcome to the Quiz Game!</h2>
                <div className="mt-8">
                    <form>
                        <label>
                            Please enter your name:     
                            <input className="ml-4 overflow-auto" onChange= { e => onNameChange(e.target.value) } type="text" name="name" />
                        </label>
                        <div>
                        <label>
                            How many questions:       
                            <input className="mt-4 ml-4 overflow-auto" onChange= { e => onNumQChange(e.target.value) } type="text" pattern="[0-9]*" name="name" />
                        </label>
                        </div>
                        <button className="text-xl bg-purple-500 w-1/2 p-5 mt-4 font-semibold rounded-lg shadow"
                    onClick= { () => onHasHitButton(true) }> Start Test</button>
                    </form>
                </div>
                
            </div>
        </div>
    );
}

export default StartPage;



