import './App.css';
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { ToDoDetails } from "./Components/ToDoDetails";
import { TodoInput } from "./Components/ToDoInput";
import { ToDoList } from "./Components/ToDoList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <br />
      <br />
      <Routes>
        <Route path="/" element={<TodoInput />} />
        <Route path="/alltodos" element={<ToDoList />} />
        <Route path="/todo/:id" element={<ToDoDetails />} />
      </Routes>
    </div>
  );
}

export default App;
