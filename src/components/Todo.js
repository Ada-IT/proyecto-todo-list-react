import {db} from '../firebase-config';

const Todo = ({todo, setTodos, todos}) => {

  const deleteHandler = () => {
    db.collection("todos").doc(todo.id).delete().then(() => {
      console.log("Document successfully deleted!");
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
    // setTodos(todos.filter(tarea => tarea.id !== todo.id))
  }

  const completeHandler = () => {
    // setTodos(todos.map(item => {
    //   if(todo.id === item.id){
    //     return {
    //       ...item, completed: !item.completed
    //     }
    //   }
    //   return item;
    // }))
    db.collection("todos").doc(todo.id).set({
      ...todo, completed: !todo.completed
    })
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
    console.log(todo);
  }

  return (
    <div className="todo">
      {/* <li className={`todo-item ${todo.completed ? "completed" : ''}`}>{todo.text}</li> */}
      <li className={`todo-item ${todo.completed && "completed"}`}>{todo.text}</li>
      <button onClick={completeHandler} className={`complete-btn ${todo.completed && "boton-rojo"}  `}>
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default Todo;