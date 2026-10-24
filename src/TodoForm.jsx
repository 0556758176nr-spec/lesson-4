import { useState, useEffect } from "react";

export default function TodoForm({ onAdd, onUpdate, editingTask }) {
    const [title, setTitle] = useState('');

    useEffect(() => {
        if (editingTask) {
            setTitle(editingTask.title);
        }
    }, [editingTask]);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = () => {
        if (title.trim() === '') return;

        if (editingTask) {
            onUpdate(editingTask.id, title);
        } else {
            onAdd(title);
        }
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
            <button onClick={handleSubmit}>אישור</button>
        </div>
    );
}