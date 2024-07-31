import "./Service.css"
import { useAuth } from "../store/auth"
export const Service = () =>{
    const {services} = useAuth();
    return (
        <>

      
        < div className="flex-wrapper">
        {  services.map((item, index)=>{
                const {price , description , provider , service}=item
    
          return  <div className="card-wrapper">
        <img src="images/services.png" className="image"/>
           <div className="two">
           <span className="provider">
                      {provider}
                 </span>
                
                 <span className="price">
                       {price}
                 </span>
                 </div>

                 <span className="service">
                    {service}
                 </span>
                
                 <span className="description">
                     { description  }
                 </span>
           </div>
             })}
        </div>
        </>
    )
}