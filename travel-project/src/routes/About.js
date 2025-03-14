import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import AboutImg from "../assets/night1.jpg"
import Footer from "../Components/Footer";
import AboutUs from "../Components/AboutUs";

function About (){

    return(
        <>
         <Navbar />
             <Hero 
             cName="hero-mid"
             heroimg={AboutImg}
             
             title="About"
             text=""
             
             btnClass="hide"
             />
             <AboutUs/>
             <Footer/>
        </>
        
    )

}
export default About ;