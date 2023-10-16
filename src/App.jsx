import UserDashboard from "./Pages/UserDashboard";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Overview from "./Pages/Overview";

function App() {
  return (
    <>
      <div className="bg-gradient-to-r px-20 from-blue-900 to-purple-500 ">
        <Navbar />

        <Routes>
          <Route path="/" element={<UserDashboard className="" />} />
          <Route path="/overview" element={<Overview/>}/>
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
