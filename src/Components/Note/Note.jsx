import React, { useState } from "react";
import "./Note.css";
import DeleteIcon from "@mui/icons-material/Delete";
function Note(props) {
  let [isHover, setHover] = useState(false);
  let timer = 500,
    timeout;
  const debounce = (func) => {
    clearTimeout(timeout);
    timeout = setTimeout(func, timer);
  };

  const updateText = (text, id) => {
    debounce(() => props.updateText(text, id));
  };

  return (
    <div className="note" style={{ backgroundColor: props.note.color }}>
      <textarea
        className="note_text"
        defaultValue={props.note.text}
        onChange={(event) => updateText(event.target.value, props.note.id)}
      />
      <div
        className="note_footer"
        onMouseEnter={() => {
          return setHover(true);
        }}
        onMouseLeave={() => {
          return setHover(false);
        }}
      >
        <div>
          <p>{props.note.time}</p>
        </div>
        <div
          className="delete-icon"
          onClick={() => props.deleteNote(props.note.id)}
        >
          {isHover && <DeleteIcon />}
        </div>
      </div>
    </div>
  );
}

export default Note;
