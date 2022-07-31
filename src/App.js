import "./App.css";
import Home from "./pages/Home";
import Task from "./pages/Task";
import { Routes, Route } from "react-router-dom";
import Context from "./components/Context";

function App() {
  return (
    <Context>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="task" element={<Task />}>
          <Route path=":taskID" element={<Task />} />
        </Route>
      </Routes>
    </Context>
  );
}
export default App;
