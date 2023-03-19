import { Form } from "react-router-dom";

function AddBudgetForm(){
    return (
        <div className="form-wrapper">
            <h2 className="h3">
                Create Budget
            </h2>
            <Form
             method="post"
             className="grid-sm"
            >
            <div className="grid-xs">
                <label htmlFor="newBudget">Budget Name</label>
                <input
                  required 
                  type="text"
                  placeholder="eg. , groceries"
                  name="newBudget"
                  id="newBudget"
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
            <button type="submit" className="btn btn--dark">
          <span>Create Budget</span>
        </button>
            </Form>
        </div>
   );}

export default AddBudgetForm;