import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from './pages/Courses';
import Trainer from './pages/Trainer';
import Events from './pages/Events';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
function App() {
  return (
    <>
    <Router>
    <Header/>
    <main class="main">
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/trainers" element={<Trainer />} />
        <Route path="/events" element={<Events />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
     </main>
    <Footer/>
    </Router>
    </>
  );
}
export default App;
