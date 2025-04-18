import React, { useState } from 'react';

const App: React.FC = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState<string[]>([]);

  const handleAdd = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const handleDelete = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px' }}>
      <h1>Todo List</h1>
      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task"
          style={{ padding: '6px', width: '70%' }}
        />
        <button onClick={handleAdd} style={{ padding: '6px 10px', marginLeft: '8px' }}>
          Add
        </button>
      </div>

      <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
        {tasks.map((t, index) => (
          <li key={index} style={{ marginBottom: '6px' }}>
            {t}{' '}
            <button onClick={() => handleDelete(index)} style={{ marginLeft: '10px' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
