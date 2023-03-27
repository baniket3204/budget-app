
// imports
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import Table from "../components/Table";
import { deleteItem, fetchData } from "../helpers";

// loader 
export async function expensesLoader(){

    const expenses = fetchData("expenses");
     return {expenses};
}

// actions
 
export async function expensesAction({request}){

  const data = await request.formData();
  const { _action , ...values } = Object.fromEntries(data);

  if(_action === "deleteExpense")
    {
      try{   
        deleteItem({
          key : "expenses" ,
          id : values.expenseId ,
        }) ;
        return toast.success("Expense Deleted !") ;
      }
      catch(e)
      {
        throw new Error("Thre was a error deleting your expense");
      }
    }
}


const ExpensesPage = () => {

    const {expenses} = useLoaderData();

    return ( 
        <div className="grid-lg">
            <h1>All Expenses</h1>
            {
              expenses && expenses.length > 0 ?
              (
                <div className="grid-md">
                    <h2>Recent Expenses <small>({expenses.length} total)</small></h2>
                    <Table expenses={expenses}/>
                </div>
              ):(<p>No Expenses</p>)
            }
        </div>
     );
}
 
export default ExpensesPage;