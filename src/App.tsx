import React, { useState } from "react";
import { Button } from "./components/button.component";
import Click from "./components/click";
import Header from "./components/header";

function App() {
  const [appText, setAppText] = useState("Rocket Flyer");

  setTimeout(() => {
    setAppText("Updated text");
  }, 5000);

  const handleChangeText = () => {
    setAppText("Updated by button click");
  };

  return (
    <div>
      <Header />
      <div className="py-10 bg-white text-red-500">{appText}</div>
      <Button buttonText="Submit" />
      <Click onClick={handleChangeText} />
    </div>
  );
}

export default App;
