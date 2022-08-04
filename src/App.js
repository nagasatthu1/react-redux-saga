import React from 'react';
import './style.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import CounterApp from "./components/counterApp"

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<CounterApp />} />

    </Routes>
    </BrowserRouter>
  );
}
