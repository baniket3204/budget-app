
// rrd imports
import { Form, useFetcher } from "react-router-dom";

// react imports
import { useRef  , useEffect} from "react";

function AddBudgetForm(){

  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting"
  const formRef = useRef();
  const focusRef = useRef();
  
  useEffect(() => {
    if(!isSubmitting)
    {
      formRef.current.reset();
      focusRef.current.focus();
    }
  }, [isSubmitting])
  
    return (
        <div className="form-wrapper">
            <h2 className="h3">
                Create Budget
            </h2>
            <fetcher.Form
             method="post"
             className="grid-sm"
             ref={formRef}
            >
            <div className="grid-xs">
                <label htmlFor="newBudget">Budget Name</label>
                <input
                  required 
                  type="text"
                  placeholder="eg. , groceries"
                  name="newBudget"
                  id="newBudget"
                  ref={focusRef}
                />
            </div>
            <div className="grid-xs">
              <label htmlFor="newBudgetAmount">Amount</label>
               <input 
                 type="number"
                 step="0.01"
                 name="newBudgetAmount"
                 id="newBudgetAmount"
                 placeholder="eg. , 350$"
                 required
                 inputMode="decimal"
                 />
            </div>
            <input type="hidden" name="_action" value="createBudget"/>
            <button type="submit" className="btn btn--dark" disabled={isSubmitting}>
           {
            isSubmitting ? <span>Submitting...</span> :
            (
              <>
              <span>Create Budget</span>
              </>
            )
           }

        </button>
            </fetcher.Form>
        </div>
   );}

export default AddBudgetForm;