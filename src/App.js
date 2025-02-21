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
import CourseSingle from './pages/CourseSingle';
import AuthProvider from './auth/AuthProvider';
import ProtectedRoute from './auth/ProtectedRoute';
function App() {
  return (
    <>
    <Router>
      <AuthProvider>
        <Header/>
        <main class="main">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/about" element={<About />} />
            </Route>
            <Route path="/courses" element={<Courses />} />
            <Route path="/trainers" element={<Trainer />} />
            <Route path="/events" element={<Events />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/course-detail/:id" element={<CourseSingle />} />
          </Routes>
        </main>
        <Footer/>
    </AuthProvider>
    </Router>
    </>
  );
}
export default App;
