import { Analytics } from "../components/Analytics"
import "./Home.css"
export const Home = () =>{
    console.log("home")
    return(
        
        <>
        <main>
            <section className="section-hero">
                <div className="container grid grid-two-cols">
                    <div className="hero-content">
                        <p>
                            I am the world best MERN developer
                        </p>
                        <h1>Welcome to thapa Technical</h1>
                        <p>
                            Are you ready to take the your busness to the next level with 
                            cutting -edge It solution ? look no futher at Saikat
                            we are specialized in providing innovative IT serviceand solution 
                            tailored to meet your unique needs.
                        </p>
                    </div>

                    <div className="btn-group">
                        <a href="/contact">
                            <button className="btn btn-cont" > connect now </button>
                        </a>

                        <a href="/service">
                            <button className="btn" > Service </button>
                        </a>
                    </div>
                   
                </div>
               
                <div className="hero-image">
                    <img src="./images/home.png" width="500px " height="500px"></img>
                    </div>
                  
            </section>
            <Analytics/>
        </main>
        </>
        
        )
}