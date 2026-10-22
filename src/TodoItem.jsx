export default function TodoItem({task}) {
      return (
        <div>
            <h2 style={{ color: getColorByStatus(task.completed) }}>
                {task.title}
            </h2>
        </div>
    );
}

    
