import Todo from './Todo';

const TodoList = ({filteredTodos, setTodos, todos}) => {
  return (
    <div>
      <div className="todo-container">
        <ul className="todo-list">
          {filteredTodos.map(todo => (
            <Todo
              todo={todo}
              todos={todos}
              setTodos={setTodos}
              key={todo.id}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;


