import {NavLink} from "react-router-dom"
import "./Error.css"
export const Error =()=>{

    return(
<>

<section id = "error-page">
    <div className = " content">
        <h1 className="header">404</h1>
        <h4>Sorry! page not found </h4>
        <p className="para">Oops it seems like the page you are trying to acess 
            does'nt exist . If you belive there is an issue, feel 
            free to report it and we'll look into it. 

        </p>
        <div className="btn-group">
                        <a href="/">
                            <button className="btn" > return to home </button>
                        </a>
                        <a href="/contact">
                            <button className="btn btn-cont" > contact </button>
                        </a>
                    </div>
       
    </div>
    
</section>

</>

    )

}