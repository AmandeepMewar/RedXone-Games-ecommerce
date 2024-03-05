import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Browse from "./pages/Browse/Browse";
import GameDetail from "./pages/GameDetail/GameDetail";

const routerDefinitions = createRoutesFromElements(
  <Route>
    <Route path="/" element={<Home />} />
    <Route path="/browse" element={<Browse />} />
    <Route path="/browse/:id" element={<GameDetail />} />
  </Route>
);

const router = createBrowserRouter(routerDefinitions);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
