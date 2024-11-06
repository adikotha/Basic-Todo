import React from "react";

export default function Complete({ task, onMarkComplete }) {
  const handleClick = () => {
    onMarkComplete(task);
  };

  return (
    <span>
      <span
        style={{
          textDecoration: task.done ? "line-through" : "none",
          cursor: "pointer",
        }}
        onClick={handleClick}
      >
        {task.content}
      </span>
      {!task.done && (
        <span style={{ marginLeft: "5px", cursor: "pointer" }} onClick={handleClick}>

        </span>
      )}
    </span>
  );
}