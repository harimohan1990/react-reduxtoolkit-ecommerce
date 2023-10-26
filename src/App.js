import { useEffect } from 'react';
import axios from 'axios';

import './App.css';
import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';
import PaymentForm from './components/payment/getStripe';


function App() {

  useEffect(()=>{
    axios.get('http://localhost:8000/').then((data)=>{
      console.log("data", data.data)
    })
  .catch((error)=>{
    console.log("something went wrong",error)
  })
  })

  return (
    <div className="App">
      <Header/>
      <Footer/>
  </div>
  );
}

export default App;
