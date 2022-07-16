import Task from "./Task"

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <section id="taskSection" className="py-5">
        <div className="container">
        <p className="text-muted small">Double click on the tasks to set reminder</p>
            {tasks.map((task, index) => (
                <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle}/>
            ))}
        </div>
    </section>
  )
}

export default Tasks