import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { Home, Browse, GameDetail, Error } from "./pages";

const routerDefinitions = createRoutesFromElements(
  <Route errorElement={<Error />}>
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
