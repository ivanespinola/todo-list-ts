import { TodoId, Todo as TodoType } from "../types"

interface Props extends TodoType {
  onRemoveTodo: ({ id }: TodoId) => void
  onToggleCompletedTodos: ({
    id,
    completed,
  }: Pick<TodoType, "id" | "completed">) => void
}

export const Todo: React.FC<Props> = ({
  id,
  title,
  completed,
  onRemoveTodo,
  onToggleCompletedTodos,
}) => {
  const handleChangeCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    onToggleCompletedTodos({
      id,
      completed: e.target.checked,
    })
  }
  return (
    <div className="view">
      <input
        className="toggle"
        checked={completed}
        type="checkbox"
        onChange={handleChangeCheckBox}
      />
      <label>{title}</label>
      <button
        className="destroy"
        onClick={() => {
          onRemoveTodo({ id })
        }}
      />
    </div>
  )
}
