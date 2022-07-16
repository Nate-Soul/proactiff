const Task = ({task, onDelete, onToggle}) => {
  return (
    <div className={`task ${task.reminder ? 'task-reminder': '' }`} onDoubleClick={() => onToggle(task.id)}>
        <div>
          <h3 key={task.id}>
              {task.title} 
          </h3>
          <p>{task.day}</p>
        </div>
        <span className="close" onClick={() => onDelete(task.id)}>&times;</span>
    </div>
  )
}

export default Task