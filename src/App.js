import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import WorkoutDietNav from "./components/WorkoutDietNav";
import Diet from "./routes/Diet";
import GetMuscle from "./components/GetMuscle";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <WorkoutDietNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diet" element={<Diet />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
