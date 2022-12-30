import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Log from "./pages/Log";
import Menu from "./nav/Menu";


export default function App() {
  return (
    <BrowserRouter>
    <Menu/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/log" element={<Log />} />
    </Routes>
    </BrowserRouter>
  );
}
