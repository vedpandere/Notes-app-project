import React, { useState } from "react";
import plusIcon from "../../asssets/plus_icon.png";

import "./SideBar.css";
function SideBar(props) {
  const colors = ["#fe9b72", "#fec971", "#00d4fe", "#b693fd", "#e4ee91"];
  const [listOpen, setListOpen] = useState(false);
  return (
    <div className="sidebar">
      <img src={plusIcon} alt="Add" onClick={() => setListOpen(!listOpen)} />
      <ul className={`sidebar_list ${listOpen ? "sidebar_list_active" : ""}`}>
        {colors.map((item, index) => (
          <li
            className="sidebar_list_item"
            key={index}
            style={{ backgroundColor: item }}
            onClick={() => props.addNote(item)}
          ></li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
