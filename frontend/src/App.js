import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Form from "./Components/Form";
import Home from "./Components/Home";
import Success from "./Components/Success";
import './styles/style.css'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>

  );
}

export default App;
