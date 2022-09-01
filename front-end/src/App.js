import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";

import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      {/* <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Index />} />
            <Route path="/books/new" element={<New />} />
            <Route path="/books/:id" element={<Show />} />
          </Routes>
        </main>
      </Router> */}
    </div>
  );
}

export default App;