import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Tecnologias from "./pages/Tecnologias";
import Trabajos from "./pages/Trabajos";
import Contactos from "./pages/Contactos";

function App() {
  return (
    <Router>
      <SideBar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tecnologias" element={<Tecnologias />} />
          <Route path="/trabajos" element={<Trabajos />} />
          <Route path="/contactos" element={<Contactos />} />

          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;
