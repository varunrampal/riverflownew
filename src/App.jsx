import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/HomePage.jsx';
import HomePage from './pages/HomePage.jsx';
import FacebookMessenger from './components/FacebookMessenger.jsx';
import TreatmentDetailsPage from "./pages/TreatmentDetailsPage";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Routes>
       <Route path="/treatments/:slug" element={<TreatmentDetailsPage />} />
        </Routes>
    </BrowserRouter>
    <FacebookMessenger/>
    </>
  )
}

export default App
