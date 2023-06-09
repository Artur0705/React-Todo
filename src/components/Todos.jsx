import TodoItem from "./TodoItem";

const Todos = ({ todos, onDelete, onChange }) => {
  return (
    <>
      <div className="d-flex justify-content-center flex-column align-items-center">
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              onChange={onChange}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </>
  );
};

export default Todos;
