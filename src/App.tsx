import { BrowserRouter, Route, Routes } from "react-router-dom";
import loadable from "@loadable/component";

const LoginPage = loadable(() => import("./pages/LoginPage"));
const RegisterPage = loadable(() => import("./pages/RegisterPage"));
const MainPage = loadable(() => import("./pages/MainPage"));
const ThreePage = loadable(() => import("./pages/ThreePage"));
const PreviewPage = loadable(() => import("./pages/PreviewPage"));

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={< LoginPage />} loader={LoginPage.load}/>
        <Route path="/register" element={<RegisterPage />} loader={RegisterPage.load} />
        <Route path="/preview" element={<PreviewPage /> } loader={PreviewPage.load} />
        <Route path="/three" element={<ThreePage />} loader={ThreePage.load} />
        <Route path="/main" element={<MainPage />} loader={MainPage.load} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;