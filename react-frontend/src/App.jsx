import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";

export default function App() {
  return (
    <Router>
      <div className="p-4">
        <nav className="mb-4 flex gap-4">
          <Link className="text-blue-600" to="/">Home</Link>
          <Link className="text-blue-600" to="/users">Users</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    </Router>
  );
}
