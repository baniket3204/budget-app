
// rrd import
import { redirect } from "react-router-dom";
//library
import { toast } from "react-toastify";
// helpers import
import { deleteItem } from "../helpers";

export async function logoutAction(){
    console.log("logout initiated")
    deleteItem({
      key : "userName"
     })
    toast.success("You have deleted the account");
    return redirect("/")
}