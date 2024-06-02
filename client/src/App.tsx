import { Outlet, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Main from "./pages/Main";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<TotalLayout />}>
          <Route index element={<Home />} />
          <Route path="main" element={<Main />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

const TotalLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
