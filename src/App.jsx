import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/HomePage.jsx';
import HomePage from './pages/HomePage.jsx';
import TestPage from './pages/TestPage.jsx';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Routes>
        <Route path="/test" element={<TestPage />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
