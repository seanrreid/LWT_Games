import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import NavBar from "./components/Navbar/NavBar";
import AboutPage from "./components/AboutPage/AboutPage";
import FAQPage from "./components/FAQ/FAQPage";
import GetInvolvedPage from "./components/GetInvolvedPage/GetInvolvedPage";
import Footer from "./components/Footer/Footer";
import NotFoundPage from "./components/NotFound/NotFoundPage";

function App() {
   return (
      <div className="App">
         <NavBar />
         <Routes>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/FAQ" element={<FAQPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/get-involved" element={<GetInvolvedPage />} />
            <Route path="*" element={<NotFoundPage />} />
         </Routes>
         <Footer />
      </div>
   );
}

export default App;
