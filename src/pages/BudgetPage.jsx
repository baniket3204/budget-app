

// imports

import { useLoaderData } from "react-router-dom";
import { getAllMatchingItems } from "../helpers";

// loader

export async function budgetLoader({params}){
    const budget = await getAllMatchingItems({
        category: "budgets" ,
        key : "id" ,
        value : params.id
    })[0] ;
    if(!budget)
    {
        throw new error("Budget you are trying to find does not exist")
    }
    return {budget} ;
}


const BudgetPage = () => {

    const {budget} = useLoaderData();

    return (  
        <div className="grid-lg">
            <h1 className="h2">
                <span className="accent">{budget.name}</span> Overview
            </h1>
        </div>
    );
}
 
export default BudgetPage;