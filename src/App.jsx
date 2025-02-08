import CurationPage from "./components/CurationPage";
import FAQ from "./components/FAQ";
import InsideCurationPage from "./components/InsideCurationPage";
import {LandingPage}  from "./components/LandingPage";
import {HashRouter, Route, Routes } from "react-router";
import Hero from './components/Hero';

function App() {
  return (
    
      <HashRouter>
        <Routes>
        <Route path="/hero" element={<Hero />} />
        <Route path="/" element={<LandingPage />} />
          <Route path="/curations" element={<CurationPage />} />
        <Route path="/single" element={<InsideCurationPage />} />
        <Route path="/faq" element={<FAQ/>}/>
        </Routes>
      </HashRouter>
   
  );
}

export default App;
