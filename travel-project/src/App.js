
import { Route, Routes,  } from "react-router-dom";
import Home from './routes/Home';
import About from './routes/About';
import Service from './routes/Service';
import Contact from './routes/Contact';
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";






  



function App() {
  return ( 
    <div className="App">

      <Navbar/>
      <Routes>

        <Route path ="/" element={<Home />}/>
        <Route path ="/about" element={<About />}/>
        <Route path ="service" element={<Service />}/>
        <Route path ="/contact" element={< Contact/>}/> 
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/Login" element={<Login/>}/>
      
       
        
        

        


      </Routes>
     

  

    

    
    </div>
  );
}

export default App;
