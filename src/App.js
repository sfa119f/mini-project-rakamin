import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./views/Home";
import Product from "./views/Product";
import About from "./views/About";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  return (
    <div className={`relative min-h-screen pb-16 ${darkMode && "dark"}`}>
      <Router>
        <Header
          darkMode={darkMode}
          changeDarkMode={(val) => {
            val
              ? (localStorage.theme = "dark")
              : (localStorage.theme = "light");
            setDarkMode(val);
          }}
        />
        <div className="py-5 px-6 lg:px-12 dark:bg-navy-dark dark:text-white">
          <Routes>
            <Route exact path={"/"} element={<Home />} />
            <Route exact path={"/product/:id"} element={<Product />} />
            <Route exact path={"/about"} element={<About />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
