import { Routes, Route } from "react-router-dom";
import TodoMain from "./TodoMain";
import Layout from "./layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<TodoMain />} />
        <Route path=":id" element={<TodoMain />} />
      </Route>
    </Routes>
  );
}

export default App;
