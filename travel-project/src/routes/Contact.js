import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import AboutImg from "../assets/2.jpg"
import Footer from "../Components/Footer";
import ContactForm from "../Components/ContactForm";

function Contact (){

    return(
        <>
        <Navbar />
             <Hero 
             cName="hero-mid"
             heroimg={AboutImg}
             
             title="Contact"
             text=""
             
             btnClass="hide"
             />
              <ContactForm/>
              <Footer/>

        </>
    )

}
export default Contact;