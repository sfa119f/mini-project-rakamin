import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./views/Home";
import Product from "./views/Product";
import About from "./views/About";

function App() {
  return (
    <div className="relative min-h-screen pb-16">
      <Router>
        <Header />
        <div className="py-5 px-6 lg:px-12">
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
