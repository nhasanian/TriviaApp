const StartPage = ( {onNameChange, onNumQChange}) => {
    
        return (
        <div className="font-semibold">
            <div className="bg-gray-500 p-40 rounded-lg shadow-md text-center">
                <h2 className="text-4xl">Welcome to the Quiz Game!</h2>
                <div className="mt-8">
                    <form>
                        <label>
                            Please enter your name:
                            <input onChange= { e => onNameChange(e.target.value) } type="text" name="name" />
                        </label>
                        <div>
                        <label>
                            How many questions:
                            <input onChange= { e => onNumQChange(e.target.value) } type="text" pattern="[0-9]*" name="name" />
                        </label>
                        </div>
                        {/* <Button color="link" className="px-0">Forgot password?</Button> */}
                    </form>
                </div>
                
            </div>
        </div>
    );
}

export default StartPage;



