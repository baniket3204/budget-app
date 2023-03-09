import { useLoaderData } from "react-router-dom";
import { fetchData } from "../helpers";

// loader 
export function dashboardLoader(){
    const userName = fetchData("userName");
     return {userName};
}

function  Dashboard(){
    const {userName} = useLoaderData();

    return(
        <>
        <div>Dashboard</div>
        <div>{userName}</div>
      </>
      
    );
}

export default Dashboard;