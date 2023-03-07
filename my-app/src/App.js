import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ArgusHeader from "./components/header";
import ArgusFooter from "./components/footer";
import Homepage from "./pages/home";
import Models from "./pages/models";
import MaaS from "./pages/maas";
import Company from "./pages/company";
import Contact from "./pages/contact";
import PrivacyPolicy from "./pages/privacy_policy";
import NotFound from "./pages/not_found";
import "./App.css";


/**
 * The App function returns the Router component, which contains the ArgusHeader, Routes, and
 * ArgusFooter components. The Routes component contains the Route components, which are the pages of
 * the website.
 * @returns The Router component is being returned.
 */
function App() {
  return (
    <Router>
      <ArgusHeader />
      <Routes>
        <Route exact path="/argus-react" element={<Homepage />} />
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
