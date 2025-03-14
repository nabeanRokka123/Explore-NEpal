import Destination from "../Components/Destination";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Trip from "../Components/Trip";




function Home (){

    return(
        <>
            <Navbar />
             <Hero 
             cName="hero"
             heroimg="https://plus.unsplash.com/premium_photo-1691735665916-cf31006dffe3?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
             
             title="Your Journey Your Story"
             text="Choose your favourite Destination" 
             buttonText="Travel plan"
             url="/"
             btnClass="show"
             />

             <Destination/>

             <Trip/>

             <Footer/>

        
             

             
        </>
    );

}
export default Home;