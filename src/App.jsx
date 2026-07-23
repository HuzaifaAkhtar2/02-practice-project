import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const inputValidity = userInput.duration >= 1;
  function changeHandler(inputId, newValue) {
    setUserInput((previousUserInput) => {
      return {
        ...previousUserInput,
        [inputId]: +newValue,
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput onChange={changeHandler} userInput={userInput} />
      {inputValidity ? <Results input={userInput} /> : <div className="center">Please enter a valid duration (greater than 0)</div>}
      
    </>
  );
}

export default App;
