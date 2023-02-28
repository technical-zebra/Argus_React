import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ArgusHeader from "./header";
import ArgusFooter from "./footer";
import Homepage from "./home";
import Models from "./models";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <ArgusHeader />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/models" element={<Models />} />
      </Routes>
      <ArgusFooter />
    </Router>
  );
}

export default App;
