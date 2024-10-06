import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import About from "./Pages/About";
import Login from './Pages/Login'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/Login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
