import React, { useState } from "react";

function App() {
  const [currentText, updateCurrentText] = useState("");
  const [listItems, setListItems] = useState(["A Item"]);

  function saveText(event) {
    let newText = event.target.value;

    updateCurrentText(newText);
  }

  function newListItem(event) {
    setListItems((prevList) => [...prevList, currentText]);
    updateCurrentText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={currentText} onChange={saveText} />
        <button onClick={newListItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {listItems.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
