import { Route, Routes } from "react-router-dom";
import HomePage from "./components/home-page/HomePage";
import { default as CalculatorComponent } from "./components/temperature/temperature-component/Calculator.jsx";
import { default as CalculatorHook } from "./components/temperature/temperature-hook/Calculator.jsx";
import { UserEdit, UserList } from "./components/crud/user";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route
        path="/temperature-component"
        element={<CalculatorComponent />}
      ></Route>
      <Route path="/temperature-hook" element={<CalculatorHook />}></Route>
      <Route path="/user-edit" element={<UserEdit />}></Route>
      <Route path="/user-edit/:userId" element={<UserEdit />}></Route>
      <Route path="/user-list" element={<UserList />}></Route>
    </Routes>
  );
}

export default App;
