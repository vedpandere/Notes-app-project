import React from "react";
import Note from "../Note/Note";
import "./NoteContainer.css";

function NoteContainer(props) {
  function reverse(arr) {
    let array = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      array.push(arr[i]);
    }
    return array;
  }

  let notes = reverse(props.notes);

  return (
    <div className="note-container">
      <h2>Notes</h2>
      <div className="note-container_notes custom-scroll">
        {notes.map((item) => (
          <Note
            key={item.id}
            note={item}
            deleteNote={props.deleteNote}
            updateText={props.updateText}
          />
        ))}
      </div>
    </div>
  );
}

export default NoteContainer;
