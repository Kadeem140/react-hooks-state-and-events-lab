import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = true ? "App dark" : "App light"

  const [ isOnMode, setIsOnMode ] = useState( false )

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick = {setIsOnMode(true)}>Dark Mode</button>
        <button onClick = {setIsOnMode(false)}>Dark Mode Off</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
