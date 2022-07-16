import { useState } from "react";

const AddTask = ({ onAdd }) => {

    const [title, setTitle] = useState("")
    const [day, setDay] = useState("")
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault();
        if(!title){
            alert("please add task")
            return
        }

        onAdd({title, day, reminder})

        setTitle("")
        setDay("")
        setReminder(false)
    }

  return (
    <form onSubmit={onSubmit}>
        <div className="container">
            <div className="form-group">
                <label htmlFor="taskTitle">Task</label>
                <input type="text" placeholder="Add Task" id="taskTitle" className="form-control" value={title}
                onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="taskDate">Day & Time</label>
                <input type="text" placeholder="Add Day & Time" id="taskDate" className="form-control" value={day}
                onChange={(e) => setDay(e.target.value)}/>
            </div>
            <div className="form-group">
                <input type="checkbox" id="taskReminder" className="form-control-check" 
                onChange={(e) => setReminder(e.currentTarget.checked)} checked={reminder}/>
                <label htmlFor="taskReminder">Set Reminder</label>
            </div>
            <div className="form-group">
                <input type="submit" className="btn btn-primary" value="Save Task"/>
            </div>
        </div>
    </form>
  )
}

export default AddTask