
import { useState } from "react";

export default function TodoForm  ({ onAdd }) {  

    const [title, setTitle] = useState('');

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = () => {
        if (title.trim() === '') return;
        onAdd(title);
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