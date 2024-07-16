import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LoginPage } from "./pages/LoginPage"
import { RegisterPage } from "./pages/RegisterPage"
import { ThreePage } from "./pages/ThreePage"

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={< LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/Three" element={<ThreePage children={""} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;