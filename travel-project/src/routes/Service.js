import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import AboutImg from "../assets/night1.jpg"
import Footer from "../Components/Footer";
import Trip from "../Components/Trip";

function Service (){

    return(
        <>
<Navbar />
             <Hero 
             cName="hero-mid"
             heroimg={AboutImg}
             
             title="Service"
             text=""
             
             btnClass="hide"
             />
             <Trip/>
             <Footer/>
        </>
    )

}
export default Service ;