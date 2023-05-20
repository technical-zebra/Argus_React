import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

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
 * The function checks if an element is currently in the viewport of the user's browser.
 * @param element - The HTML element that you want to check if it is currently in the viewport.
 * @returns The function `isInViewport` returns a boolean value indicating whether the given element is
 * currently within the visible viewport of the browser window.
 */
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/**
 * The App function returns the Router component, which contains the ArgusHeader, Routes, and
 * ArgusFooter components. The Routes component contains the Route components, which are the pages of
 * the website.
 * @returns The Router component is being returned.
 */
function App() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (isInViewport(sectionRef.current)) {
        setIsVisible(true);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Router>
      <section
        ref={sectionRef}
        className={`text-anime ${isVisible ? "slide-in" : ""}`}
      >
        </section>
        <ArgusHeader />
        <div className="margin-top">
        <Routes>
          <Route exact path="/argus-react" element={<Homepage />} />
          <Route path="/models" element={<Models />} />
          <Route path="/maas" element={<MaaS />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy_policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </div>
        <ArgusFooter />
      
    </Router>
  );
}

export default App;
