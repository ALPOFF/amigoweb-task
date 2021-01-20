import React, { useState } from "react";
import { ReactComponent as DownArrow } from "./../../assets/images/downArrow.svg";
import "./Dropdown.css";

let ddList = [
  { lang: "Русский" },
  { lang: "Английский" },
  { lang: "Китайский" },
  { lang: "Испанский" },
];

const Dropdown = ({ getCurrentLang }) => {
  const [openedStatus, setOpened] = useState(false);
  const [choosedLang, setChoosedLang] = useState({ lang: "Язык" });

  return (
    <div className="dd_wrapper">
      <div className="dd_header" onClick={() => setOpened(!openedStatus)}>
        {choosedLang.lang}
        <DownArrow />
      </div>
      <div className="dd_list">
        {openedStatus &&
          ddList.map((el) => (
            <div
              className="dd_list_element"
              onClick={() => {
                setChoosedLang(el);
                setOpened(false);
                getCurrentLang(el);
              }}
            >
              {el.lang}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dropdown;
