import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import Edit from "./Pages/Edit";

import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main className="background">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Index />} />
            <Route path="/books/new" element={<New />} />
            <Route path="/books/:id" element={<Show />} />
            <Route path="/books/:id/edit" element={<Edit />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;