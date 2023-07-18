import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProtectedPages } from "./components/ProtectedPages";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/weather" element={<ProtectedPages />} />
      </Routes>
    </Router>
  );
}

export default App;
