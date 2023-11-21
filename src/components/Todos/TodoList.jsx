import Todo from './Todo'
import styles from './TodoList.module.css'

function TodoList({
  todos,
  deleteTodo,
  toggleTodo,
  editTodo,
  editText,
  editingTexts,
  todoEditing,
  saveEditTodo,
}) {
  return (
    <div className={styles.todoListContainer}>
      {!todos.length && <h2>Todo list is empty</h2>}
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          editTodo={editTodo}
          editText={editText}
          editingTexts={editingTexts}
          todoEditing={todoEditing}
          saveEditTodo={saveEditTodo}
        />
      ))}
    </div>
  )
}

export default TodoList
