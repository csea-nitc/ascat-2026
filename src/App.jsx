// App.jsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Research from "./pages/Research";
import Team from "./pages/Team";

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen overflow-x-hidden">
        <div className="relative z-[20] flex bg-[#f6f7f7] flex-1 mb-[64vh] md:mb-[38.5vh] rounded-b-2xl overflow-hidden">
          <Sidebar />
          <main className="flex-1 min-h-screen">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/research" element={<Research />} />
              <Route path="/team" element={<Team />} />
            </Routes>
          </main>
        </div>

        <Footer />
      </div>
    </Router>
  );
}
