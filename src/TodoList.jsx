import { useState } from "react";
import TodoItem from "./TodoItem";

const initialTasks = [
    { id: 1, title: 'Buy groceries', completed: false },
    { id: 2, title: 'Walk the dog', completed: true },
    { id: 3, title: 'Read a book', completed: false },
];

export default function TodoList() {
    const [tasks, setTasks] = useState(initialTasks);
    const [title, setTitle] = useState('');

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const addTask = () => {
        if (title.trim() === '') return;

        const newTask = {
            id: Date.now(),
            title: title,
            completed: false,
        };
        setTasks(prevTasks => [...prevTasks, newTask]);
        setTitle('');
    };

    return (
        <div>
            <input
                type="text"
                placeholder="task"
                name="task"
                value={title}
                onChange={handleTitleChange}
            />
            <button onClick={addTask}>אישור</button>
            <h1>Todo List</h1>
            {tasks.map(task => (
                <TodoItem key={task.id} task={task} />
            ))}
        </div>
    );
}