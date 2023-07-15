import React, { useState } from "react";

const TodoForm = ({ onAdd }) => {
  const [text, setText] = useState("");
  return (
    <>
      <h1 className="text-center my-5 text-secondary">Todos</h1>
      <div className="d-flex justify-content-center">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!text) {
              return;
            } else {
              onAdd(text);
              setText("");
            }
          }}
          className="d-flex mt-3 p-2 w-25 align-items-center"
        >
          <input
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            className="form-control"
            placeholder="Add Todo"
          />
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default TodoForm;
