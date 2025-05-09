import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx"
import Navbar from "./components/Navbar.jsx"
import { useThemeStore } from "./store/useThemeStore.js";
import { Toaster } from "react-hot-toast";
import ProductPage from "./pages/ProductPage.jsx";


function App() {

  const { theme, setTheme } = useThemeStore()

  return (

    <div className="min-h-screen bg-base-200 transition-colors duration-300" data-theme={theme}>
      <Navbar />
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:id" element={<ProductPage />} />
      </Routes>
    </div>
  )
}

export default App
