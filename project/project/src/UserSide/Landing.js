import React from 'react';
import logo from '../logo.png'; 
import pic1 from '../pic1.png'
import pic2 from '../pic2.png'
import './Landing.css';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
   
  let navigate = useNavigate();
  return (
<div className='wholePage'>

<div className='firstPage'>
  <div className='back'>

  
<div className='head'>
    <img  className="logo" src={logo} />
    <a href="    https://form.jotform.com/213626558032555" target="_blank">
    <button  className='bb2'  >Contact Us  </button>
    </a>
</div>
<div className='center'>
 <center>
     <h1 className='hh1'>Unlimited movies, TV shows, and more </h1>
     <h3 className='hh2'>Watch anywhere. Cancel anytime.</h3>
     <h4 className='hh3'>Ready to enjoy? sign in to create or restart your membership.</h4>
     <button className='bb3' onClick={() => navigate("/loginUser")} >Get Started</button>
 </center>
</div>
</div>
</div>



<div className='secondPage'>
<div className='leftSide'>
  <h1 className='hh4'>book any movie you want</h1>
  <h4 className='hh5'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more</h4>
</div>
<div className='rightSide'>
<img className="pic1" src={pic1}/>
</div>

</div>



<div className='thirdPage'>

<div className='leftSide'>
<img  className='pic2' src={pic2}/>
</div>
<div className='rightSide'>
<h1 className='hh6'>Download your shows to watch offline.</h1>
<h4 className='hh7'>Save your favorites easily and always have something to watch.</h4>
</div>


</div>



<div className='fourthPage'>

<center>
  <h1 className='hh8'>Frequently Asked Questions</h1>
  <div className='quistions'>
   <ul >
   <li className='L1'> 
    <button className='bb4' > what is cinema plus?</button>
    <div>
    <p  className='p1'>
    Cinema plus is a streaming service that offers a wide variety of award- 
    winning TV shows,movies, anime, documentaries, and more on thousands of 
    internet-connected devices.There's always something new to discover and 
    new TV shows and movies are added every week!
    </p>
    </div>
   </li>
   <li >
   <button className='bb5'> HOW DO I BOOK TICKETS IN ADVANCE?</button>
    <div>
    <p className='p2' >
    Tickets are available via the website, mobile app, or in person at the 
    cinema box office. To make your booking, have your credit or debit card 
    information ready and follow the instructions provided.
    </p>
    </div>
   </li>
   <li >
   <button className='bb6'> WHERE CAN I FIND YOUR TICKET PRICES?</button>
    <div>
    <p className='p3'>
    Ticket prices for each cinema can be found by clicking on the ‘Cinemas’ 
    tab on the website or by clicking here. From here you can select which 
    cinema you would like to visit and then click ‘Cinema Info’ for general 
    and pricing information.
    </p>
    </div>
   </li>
   <li >
   <button className='bb7'> AM I ALLOWED TO BRING A BAG TO THE CINEMA? </button>
    <div>
    <p  className='p4'>
    We reserve the right to respectfully inspect all items, including but not
    limited to bags, rucksacks and holdalls, that our guests may decide to 
    bring with them.
    </p>
    </div>
   </li>
   <li >
   <button className='bb8'> CAN I BRING IN MY OWN FOOD TO THE CINEMA?</button>
    <div>
    <p className='p5'>
    We do not allow guests to bring hot food, alcoholic beverages and drinks in 
    glass containers into our buildings. We reserve the right to refuse admission.
    </p>
    </div>
   </li>

   </ul>
   </div>
</center>


</div>


 </div>

  );
}


export default Landing;


