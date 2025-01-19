
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
function App() {
  return (
    <>
    <Router>
    <Header/>
    <main class="main">
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
     </main>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
