
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Features from "./pages/Features";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import { Toaster } from "./components/ui/toaster";

// Blockchain Voting System pages
import Home from "./pages/Home";
import Vote from "./pages/Vote";
import Results from "./pages/Results";
import Admin from "./pages/Admin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vote" element={<Vote />} />
        <Route path="/vote/:electionId" element={<Vote />} />
        <Route path="/results" element={<Results />} />
        <Route path="/admin" element={<Admin />} />
        
        {/* Legacy routes */}
        <Route path="/index" element={<Index />} />
        <Route path="/features" element={<Features />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
