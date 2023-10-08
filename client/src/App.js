import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import PhoneDetailsPage from "./pages/PhoneDetailsPage";

import Error from "./pages/Error";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div>
     <div className = "sidebar">
      <Sidebar />
      </div>
      <div className = "content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/phone/:id" element={<PhoneDetailsPage />} />
          <Route path="/error" element={<Error />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
