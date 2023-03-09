import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Dashboard, { dashboardLoader } from "./pages/dashboard";
import Error from "./pages/error";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Dashboard />,
    loader: dashboardLoader ,
    errorElement : <Error />
  },
  {
    path: "/1",
    element:<h1>hello</h1>,
  },

]);

function App() {

  return (
    <div className="App">
      <RouterProvider router = {router} />
    </div>
  )
}

export default App
