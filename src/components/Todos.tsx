import { ListOfTodos, TodoId, Todo as TodoType } from "../types"
import { Todo } from "./Todo"
import { useAutoAnimate } from "@formkit/auto-animate/react"

interface Props {
  todos: ListOfTodos
  onRemoveTodo: ({ id }: TodoId) => void
  onToggleCompletedTodos: ({
    id,
    completed,
  }: Pick<TodoType, "id" | "completed">) => void
}

export const Todos: React.FC<Props> = ({
  todos,
  onRemoveTodo,
  onToggleCompletedTodos,
}) => {
  const [parent] = useAutoAnimate()
  return (
    <ul className="todo-list" ref={parent}>
      {todos.map((todo) => (
        <li key={todo.id} className={`${todo.completed ? "completed" : ""}`}>
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onToggleCompletedTodos={onToggleCompletedTodos}
            onRemoveTodo={onRemoveTodo}
          />
        </li>
      ))}
    </ul>
  )
}
