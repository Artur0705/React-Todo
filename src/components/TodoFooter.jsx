import React from "react";

const TodoFooter = ({ todos, onClearCompleted }) => {
  const completedSize = todos.filter((todo) => todo.isCompleted).length;
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="d-flex mt-3 p-2 bg-light w-25 justify-content-between">
        <span>
          {completedSize}/{todos.length} Completed{" "}
        </span>
        <button onClick={onClearCompleted} className="btn btn-primary">
          Clear Completed
        </button>
      </div>
    </div>
  );
};

export default TodoFooter;
