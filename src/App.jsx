import CurationPage from "./components/CurationPage";
import { LandingPage } from "./components/LandingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import SingleCuration from "./components/SingleCuration";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/curations" element={<CurationPage />} />
          <Route path="/single" element={<SingleCuration />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
