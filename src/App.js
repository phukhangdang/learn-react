import { Route, Routes } from "react-router-dom";
import HomePage from "./home-page/HomePage";
import { default as CalculatorComponent } from "./temperature/temperature-component/Calculator.jsx";
import { default as CalculatorHook } from "./temperature/temperature-hook/Calculator.jsx";
import { UserEdit, UserList } from "./crud/user";

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
      <Route path="/user-list" element={<UserList />}></Route>
    </Routes>
  );
}

export default App;
