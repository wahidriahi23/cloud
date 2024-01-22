import React from "react";
import './App.css';
import SimpleMap from "./SimpleMap";
import Footer from './Footer';
import Intro from "./Intro";
import Disclaimer from "./Disclaimer";
import Form from "./Form";

function App() {
  return (
    <div className="App">
     <h1> google-map</h1>,
     <SimpleMap/>
     <Intro/>
      <Form/>
     <Disclaimer/>
     <Footer/>
    </div>
  );
}

export default App;
