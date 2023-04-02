import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Market from "./Components/Market";
import Success from "./Components/Success";
import Register from "./Components/Register";
import Chatbot from "./Components/Advisorybot";
import Charts from "./Components/Charts";
import Dashboard from "./Components/Dashboard";
import Result from "./Components/Result";


function App() {

  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/success" element={<Success />} />
          <Route path="/market" element={<Market />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/charts" element={<Charts />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/results" element={<Result />} />
        </Routes>
      <Footer />
    </Router>

  );
}

export default App;
