import React from "react";

const TodoItem = ({ todo, onChange, onDelete }) => {
  return (
    <div className="d-flex flex-column mt-3 p-2 w-25">
      <div className="list-group">
        <label className="list-group-item">
          <input
            className="form-check-input me-1"
            type="checkbox"
            checked={todo.isCompleted}
            onChange={(e) => {
              onChange({
                ...todo,
                isCompleted: e.target.checked,
              });
            }}
          />
          {todo.text}
          <div className="d-flex  justify-content-end align-items-center">
            <button
              onClick={() => {
                onDelete(todo);
              }}
              type="button"
              className="btn-close d-flex align-items-center"
              aria-label="Close"
            ></button>
          </div>
        </label>
      </div>
    </div>
  );
};

export default TodoItem;
