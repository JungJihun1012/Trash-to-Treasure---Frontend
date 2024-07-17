import { BrowserRouter, Route, Routes } from "react-router-dom"
import { RegisterPage } from "./pages/RegisterPage"
import { ThreePage } from "./pages/ThreePage"
import { MainPage } from "./pages/MainPage"
import { LoginPage } from "./pages/LoginPage"
// import loadable from "@loadable/component"

// const LoginPage = loadable(() => import("./pages/LoginPage"));

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={< LoginPage />}/>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/three" element={<ThreePage />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;