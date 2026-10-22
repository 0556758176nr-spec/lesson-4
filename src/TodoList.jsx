export default function TodoList() {

    const tasks = [
        { id: 1, title: 'Buy groceries', completed: false },
        { id: 2, title: 'Walk the dog', completed: true },
        { id: 3, title: 'Read a book', completed: false },
    ];

    return (
        <div>
            <h1>Todo List</h1>
            {tasks.map(task => (
                <div key={task.id} {tasks.title} />
            ))}
        </div>
    );
}

                    
