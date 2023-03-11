import { Form } from "react-router-dom";
import illustration from "../assets/illustration.jpg";

function Intro(){
    return(
     <div className="intro">
        <div>
            <h1>Take control of 
                <span className="accent"> YOUR MONEY</span>
            </h1>
            <p>Grab Your financial freedom.Take control.</p>
            <Form method="post">
              <input
              type="text"
              required
              placeholder="What is your name?"
              autoComplete="given-name"
              name="userName"
              aria-label="Your Name"
              >
              </input>
              <button type="submit" className="btn btn--dark">
               <span>Create Account</span>
              </button>
            </Form>
        </div>
        <img src={ illustration } alt="Person with money" width={600}></img>
     </div>
    );
}

export default Intro;