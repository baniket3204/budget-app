
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import { logoutAction } from "./actions/logout";
import Main , {mainLoader} from "./layouts/Main";
import Dashboard, { dashboardAction, dashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ExpensesPage, { expensesAction, expensesLoader } from "./pages/ExpensesPages";
import BudgetPage from "./pages/BudgetPage";
  

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main />,
    loader: mainLoader ,
    errorElement : <Error /> ,
    children : [
      {
        index : true,
        element:<Dashboard />,
        loader: dashboardLoader ,
        action : dashboardAction ,
        errorElement : <Error />
      },
      {
        path : "expenses",
        element:<ExpensesPage />,
        loader : expensesLoader ,
        action : expensesAction ,
        errorElement : <Error /> 
      },
      {
        path : "budget/:id",
        element:<BudgetPage />,
        loader : expensesLoader ,
        errorElement : <Error /> 
      },
      {
        path : "logout" , 
        action : logoutAction
      },
    ]
  },
  
]);

function App() {

  return (
    <div className="App">
      <RouterProvider router = {router} />
      <ToastContainer />
    </div>
  )
}

export default App
