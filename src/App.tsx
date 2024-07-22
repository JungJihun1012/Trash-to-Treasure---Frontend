import { BrowserRouter, Route, Routes } from "react-router-dom";
import loadable from "@loadable/component";

const pages = [
  { path: "/login", component: () => import(/* @vite-ignore */ "./pages/LoginPage") },
  { path: "/register", component: () => import(/* @vite-ignore */ "./pages/RegisterPage") },
  { path: "/preview", component: () => import(/* @vite-ignore */ "./pages/PreviewPage") },
  { path: "/three", component: () => import(/* @vite-ignore */ "./pages/ThreePage") },
  { path: "/", component: () => import(/* @vite-ignore */ "./pages/MainPage") },
  { path: "/upcyclingShose", component: () => import(/* @vite-ignore */ "./pages/UpcyclingShose3DPage") },
  { path: "/upcyclingBag", component: () => import(/* @vite-ignore */ "./pages/UpcyclingBag3DPage") },
  { path: "/upcyclingGuitar", component: () => import(/* @vite-ignore */ "./pages/UpcyclingGuitar3DPage") },
  { path: "/upcyclingTenis", component: () => import(/* @vite-ignore */ "./pages/UpcyclingTenisPage") },
];

const loadablePages = pages.map(page => ({
  ...page,
  component: loadable(page.component),
}));

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {loadablePages.map(({ path, component: Component }) => (
          <Route key={path} path={path} element={<Component />} loader={Component.load} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default App;