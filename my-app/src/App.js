import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ArgusHeader from "./header";
import ArgusFooter from "./footer";
import Homepage from "./home";
import Models from "./models";
import MaaS from "./maas";
import Company from "./company";
import Contact from "./contact";
import PrivacyPolicy from "./privacy_policy";
import NotFound from "./not_found";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <ArgusHeader />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/models" element={<Models />} />
        <Route path="/maas" element={<MaaS />} />
        <Route path="/company" element={<Company />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy_policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ArgusFooter />
    </Router>
  );
}

export default App;
