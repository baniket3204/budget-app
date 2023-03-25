import { useRef , useEffect} from "react";
import { useFetcher } from "react-router-dom";

const AddExpenseForm = ({budgets}) => {
    const fetcher = useFetcher();
    const formRef = useRef();
    const focusRef = useRef();
    const isSubmitting = fetcher.state === "submitting";

    useEffect(() => {
      if(!isSubmitting)
      {
         formRef.current.reset();
         focusRef.current.focus();
      }
    }, [isSubmitting])
    
    return (
         <div className="form-wrapper">
            <h2 className="h3">Add New{" "}<span className="accent">
             {budgets.length === 1 && `${budgets.map((budg)=>budg.name)}`}
            </span>{" "}
             Expense
            </h2>
            <fetcher.Form
            method = "post"
            className = "grid-sm"
            ref={formRef}
            >
            <div className="expense-inputs">
                <div className="grid-xs">
                  <label htmlFor="newExpense">
                    <input
                     type="text"
                     placeholder="e.g. , coffee"
                     id="newExpense"
                     name="newExpense"
                     ref={focusRef}
                     required
                    />
                  </label>
                </div>
                <div className="grid-xs">
                  <label htmlFor="newExpenseAmount">
                    <input 
                     type = "number"
                     step="0.01"
                     inputMode="decimal"
                     name="newExpenseAmount"
                     placeholder="e.g. , 3.50"
                     required
                    />
                  </label>
                </div>
            </div>
            <div className="grid-xs" hidden={budgets.length === 1}>
                <label htmlFor="newExpenseBudget">Budget Category</label>
                <select name="newExpenseBudget" id="newExpenseBudget" required>
                    {
                        budgets.sort((a , b) => a.createdAt - b.createdAt)
                        .map((budget) => {
                            return(
                                <option key={budget.id} value={budget.id}>{budget.name}</option>
                            )
                        })
                    }
                </select>
            </div>
            <input type="hidden" name="_action" value="createExpense" />
            <button type="submit" className="btn btn--dark" disabled={isSubmitting}>
           {
            isSubmitting ? <span>Submitting...</span> :
            (
              <>
              <span>Add Expense</span>
              </>
            )
           }
          </button>
            </fetcher.Form>
         </div>
    );
}
 
export default AddExpenseForm;