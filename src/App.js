import React, { useState } from 'react';
import './App.css';


function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: inputValue }]);
      setInputValue('');
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleEditTodo = (id, newText) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, text: newText };
      }
      return todo;
    }));
  };
  return (
    <>
      <div className="main">
        <h1>TODO LIST</h1>
        <hr></hr>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="add item..." /><br></br>
        <button type="button" onClick={handleAddTodo}>ADD</button>
        <table>
        <tbody>
          {todos.map(todo => (
            <tr key={todo.id}>
              <td>{todo.text}</td>
              <td>
                <button onClick={() => handleDeleteTodo(todo.id)} className="delete">Delete</button>
                <button onClick={() => handleEditTodo(todo.id, prompt('Enter new text:', todo.text))} className="edit">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </>
  );
}

export default App;
