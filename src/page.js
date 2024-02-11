import {Link} from "react-router-dom";
function Page(){
    return (
        <div>
            <h1>404 Not Found</h1>
            <br/>
            <br/>
            <h1>This URL is not present</h1>
            <br/>
            <h3><Link to="/">Go to Home Page</Link></h3>
            
        </div>
    )
}

export default Page;