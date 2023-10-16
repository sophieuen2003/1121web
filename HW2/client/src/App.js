import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListEmployees from "./ListEmployees";
import CreateEmployees from "./CreateEmployees";
import ShowEmployees from "./ShowEmployees";
import UpdateEmployees from "./UpdateEmployees";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListEmployees />}></Route>
        <Route path="/create" element={<CreateEmployees />}></Route>
        <Route path="/show/:id" element={<ShowEmployees />}></Route>
        <Route path="/edit/:id" element={<UpdateEmployees />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
