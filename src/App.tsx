import { Route, Routes } from "react-router-dom";
import HomePage from "./view/home-page/HomePage";
import { default as CalculatorHook } from "./components/temperature/temperature-hook/Calculator";
import { UserEdit, UserList } from "./components/crud/user";
import MyLayout from "./components/layout/MyLayout";
import routes from "./routes";
import "./fontawasome"

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/temperature-hook" element={<CalculatorHook />}></Route>
      <Route path="/user-edit" element={<UserEdit />}></Route>
      <Route path="/user-edit/:userId" element={<UserEdit />}></Route>
      <Route path="/user-list" element={<UserList />}></Route>
      {routes.map((route) => (
        <Route
          key={route.route}
          path={route.route}
          element={<MyLayout>{route.component}</MyLayout>}
        ></Route>
      ))}
    </Routes>
  );
}

export default App;
