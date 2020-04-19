import React from "react";
import ReactDOM from "react-dom";



// function based component
const App = () => {

    const buttonText = 'Click Me!';

    return (
        <div>
            <label className="label" for="name">Enter Name:</label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: 'blue', color: 'white' }}>{buttonText}</button>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));
