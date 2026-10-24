
function getColorByStatus(completed) {
    return completed ? 'green' : 'red';
}

export default function TodoItem({ task, onComplete }) {
    return (
        <div>
            <h2 style={{ color: getColorByStatus(task.completed) }}>
                {task.title}
            </h2>
            <button onClick={() => onComplete(task.id)}>המשימה בוצעה</button>
        </div>
    );
}
