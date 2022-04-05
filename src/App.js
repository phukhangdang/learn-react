import { Route, Routes } from "react-router-dom";
import HomePage from "./components/home-page/HomePage.tsx";
import { default as CalculatorHook } from "./components/temperature/temperature-hook/Calculator.tsx";
import { UserEdit, UserList } from "./components/crud/user";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/temperature-hook" element={<CalculatorHook />}></Route>
      <Route path="/user-edit" element={<UserEdit />}></Route>
      <Route path="/user-edit/:userId" element={<UserEdit />}></Route>
      <Route path="/user-list" element={<UserList />}></Route>
    </Routes>
  );
}

export default App;
