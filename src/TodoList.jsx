import { useState } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

const initialTasks = [
    { id: 1, title: 'Buy groceries', completed: false },
    { id: 2, title: 'Walk the dog', completed: true },
    { id: 3, title: 'Read a book', completed: false },
];

export default function TodoList() {
    
    const [tasks, setTasks] = useState(initialTasks);

    const addTask = (title) => {
        const newTask = {
            id: Date.now(),
            title: title,
            completed: false,
        };
        setTasks(prevTasks => [...prevTasks, newTask]);
    };

    return (
        <div>
            <TodoForm onAdd={addTask} />
            <h1>Todo List</h1>
            {tasks.map(task => (
                <TodoItem key={task.id} task={task} />
            ))}
        </div>
    );
}