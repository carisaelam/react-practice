import React from "react";
import data from "./AccordianData.js";

export default function Accordian() {
  const [selected, setSelected] = React.useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = React.useState(false);
  const [multiple, setMultiple] = React.useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    let copyMultiple = [...multiple];
    const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);
    console.log(findIndexOfCurrentId);
  }

  console.log(selected);
  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!setEnableMultiSelection)}>
        Enable Multi-Selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id ? (
                <div className="content">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>no data found</div>
        )}
      </div>
    </div>
  );
}
