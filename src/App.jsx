import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import BasketPage from "./pages/BasketPage";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<MainPage></MainPage>}></Route>
        <Route path="/basket" element={<BasketPage></BasketPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
