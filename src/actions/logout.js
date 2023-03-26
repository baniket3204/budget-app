
// rrd import
import { redirect } from "react-router-dom";
//library
import { toast } from "react-toastify";
// helpers import
import { deleteItem } from "../helpers";

export async function logoutAction(){
    deleteItem({
      key : "userName"
     })
     deleteItem({
      key : "budgets"
     })
     deleteItem({
      key : "expenses"
     })
    toast.success("You have deleted the account");
    return redirect("/")
}