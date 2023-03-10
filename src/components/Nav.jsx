//rrd exports
import {Form, NavLink} from "react-router-dom"

// assests
import logomark from "../assets/logomark.svg"


function Nav({userName}){
    return(
      <nav>
        <NavLink to = "/" aria-label="go to home">
        <img src={logomark} height = {30}/>
        <span>Home Budget</span>
        </NavLink>
  
        {
           (userName) && (
            <Form 
              method="post"
              action="/logout" 
              onSubmit={(event) =>{
                if(!confirm("Delete all your data?"))
                {
                  event.preventDefault()
                }
              }}
             >
              <button type="submit" className="btn btn--warning">
                <span>Delete User</span>
              </button>
            </Form>
          )
        }
      </nav>
    );
}

export default Nav;


