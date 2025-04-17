import { useState } from "react"
import { FaCheckCircle, FaTrash } from "react-icons/fa"
import { toast } from "react-toastify"
import Header from "../components/Header"

// todo -> task list
// array map

const TodoPage = () => {

    const [todo, setTodo] = useState("")
    const [todoList, setTodoList] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (todo == "") {
            return toast.error("Task cannot be empty.")
        }
        const index = todoList.findIndex((todoItem) => todoItem.task.toLowerCase() == todo.toLowerCase())
        if (index != -1) {
            return toast.error("Task already exists.")
        }
        const dateTime = new Date().toISOString()
        const taskObj = {
            id: crypto.randomUUID(),
            task: todo,
            status: "Pending",
            createdAt: dateTime,
            updateAt: dateTime
        }
        setTodoList([taskObj, ...todoList])
        setTodo("")
        return toast.success("Task added.")
    }

    const handleChange = (e) => {
        setTodo(e.target.value)
    }

    const handleTodoDelete = (id) => {
        const remaining = todoList.filter(todoItem => todoItem.id != id)
        setTodoList(remaining)
        return toast.error("Task deleted.")
    }

    const handleTodoCheck = (todoItem) => {
        if (todoItem.status == "Completed") {
            return toast.error("Task already completed.")
        }
        const updatedList = todoList.map((item) => {
            if(item.id == todoItem.id) {
                return {
                    ...item,
                    status: "Completed",
                    updateAt: new Date().toISOString()
                }
            }
            return item
        })
        setTodoList(updatedList)
        return toast.success("Task completed.")
    }

    return <div className="px-2 d-flex flex-column align-items-center justify-content-center">
        <Header brand={<img style={{width: "40px"}} src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="logo"/>} />
        <form onSubmit={handleSubmit} className="w-100 d-flex mt-2" style={{ maxWidth: "500px" }}>
            <input type="text" value={todo} onChange={handleChange} placeholder="Enter Task to be done." name="todo" className="w-100 border border-2 p-2 border-secondary border-end-0" style={{outline: "none"}}/>
            <button className="btn btn-secondary text-nowrap rounded-0">Add Task</button>
        </form>
        <div className="w-100 mt-3" style={{maxWidth: "500px"}}>
            {
                todoList.map(todoItem => {
                    return <div key={todoItem.id} className="d-flex justify-content-between border border-2 border-secondary p-2 align-items-center">
                        <div>
                            <h4>{todoItem.task}</h4>
                            <p>Status: {todoItem.status}</p>
                            <p>Created At: {todoItem.createdAt}</p>
                            <p>Updated At: {todoItem.updateAt}</p>
                        </div>
                        <div className="d-flex flex-column justify-content-center gap-1">
                            <button className="btn" onClick={() => handleTodoDelete(todoItem.id)}><FaTrash cursor={"pointer"} color="red"/></button>
                            <button className="btn" onClick={() => handleTodoCheck(todoItem)}><FaCheckCircle color="green" cursor={"pointer"}/></button>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
}

export default TodoPage