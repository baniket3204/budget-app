import { Link, useNavigate, useRouteError } from "react-router-dom";

function Error(){
  
  const error = useRouteError();
  const navigate = useNavigate();

  return(
    <div className="error">
      <h1>Uh oh! we got a problem</h1>
      <p>{error.message || error.statusText}</p>
      <div className="flex-md">
        <button className="btn btn--dark" onClick={()=>navigate(-1)}>
          <span>Go back</span>
        </button>
        <Link to="/" className="btn btn--dark">
        <span>Go Home</span>
        </Link>
      </div>
    </div>
  );
}
export default Error; 