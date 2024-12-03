// IMPORTANT:
// In this Udemy environment, you CAN'T import & use useState like this:
import { useState } from "react";
import "./App.css";
// Instead, import & use it like this:
// import React from 'react';
// React.useState(...)

// don't change the Component name "App"
export default function App() {
  const [isDeleted, setIsDeleted] = useState(false);

  function proceedHandler() {
    setIsDeleted(false);
  }
  function deleteHandler() {
    setIsDeleted(true);
  }

  let proceedContainer = (
    <div>
      <div data-testid="alert" id="alert">
        <h2>Are you sure?</h2>
        <p>These changes cant be reverted!</p>
        <button onClick={proceedHandler}>Proceed</button>
      </div>
    </div>
  );

  let deleteButton = <button onClick={deleteHandler} id="del-btn">Delete</button>;

  return <>{isDeleted ? proceedContainer : deleteButton}</>;
}
