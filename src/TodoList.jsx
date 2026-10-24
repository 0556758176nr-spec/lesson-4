{tasks.map(task => (
    <TodoItem
        key={task.id}
        task={task}
        onComplete={completeTask}
        onDelete={deleteTask}
        onEdit={startEdit}
    />
))}