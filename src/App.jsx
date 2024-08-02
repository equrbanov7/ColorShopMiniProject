import { routes } from "./routes/routes";
import { RouterProvider } from "react-router-dom";

import "../src/assets/styles/base.scss"

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
