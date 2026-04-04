import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.scss";
import App from "./App.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { MyBookings } from "./pages/MyBookings.tsx";
import { Explore } from "./pages/Explore.tsx";
import { Help } from "./pages/Help.tsx";
function AppRouter() {
  return (
    <Router>
      <App>
        <div className="main">
          <Routes>
            <Route path="/mybookings" element={<MyBookings />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </div> 
      </App>
    </Router>
  );
}
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
);
