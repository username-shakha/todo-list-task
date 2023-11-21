import { FaPen } from 'react-icons/fa'
import { FaCheck } from 'react-icons/fa'
import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri'
import styles from './Todo.module.css'

function Todo({
  todo,
  deleteTodo,
  toggleTodo,
  editTodo,
  editText,
  editingTexts,
  todoEditing,
  saveEditTodo,
}) {
  const onSubmitHandler = (event) => {
    event.preventDefault()
    addTodo(text)
    setText('')
  }
  return (
    <div
      className={`${styles.todo} ${
        todo.isCompleted ? styles.completedTodo : ''
      }`}
    >
      <RiTodoFill className={styles.todoIcon} />

      {todoEditing === todo.id ? (
        <form className={styles.saveEditingTodoForm} onSubmit={onSubmitHandler}>
          <input
            placeholder="Edit the todo text"
            type="text"
            onChange={(e) => editText(e.target.value)}
            value={editingTexts}
          />
          <button type="Submit" onClick={() => saveEditTodo(todo.id)}>
            save
          </button>
        </form>
      ) : (
        <div className={styles.todoText}>{todo.text}</div>
      )}
      <FaPen className={styles.penIcon} onClick={() => editTodo(todo.id)} />
      <FaCheck
        className={styles.checkIcon}
        onClick={() => toggleTodo(todo.id)}
      />
      <RiDeleteBin2Line
        className={styles.deleteIcon}
        onClick={() => deleteTodo(todo.id)}
      />
    </div>
  )
}

export default Todo
