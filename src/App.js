import React,{useState} from 'react';
import CYngH5 from  './assets/images/CYngH5.jpg';
import InputForm from './Components/InputForm';
import './App.css';
const Dummy_Data = [
  {
    orderId: '#123',
    amount : 12,
    date : new Date(2023,8,18),
  },
  {
    orderId: '#124',
    amount : 10,
    date : new Date(2023,7,18),
  },
  {
    orderId: '#125',
    amount : 14,
    date : new Date(2023,6,18),
  },
];

function App() {
  const[deatilArray,setDetailArray]=useState(Dummy_Data);
  function addExpenseHandler(expense)
  {
        // console.log('In App.JS');
        // console.log(expense);
        setDetailArray((prevData)=>{
          return([ expense,...prevData]);
        });
      }
  return (
    <div className='bg'>
      
         <img src={CYngH5} alt="coffe bean background" />
        <InputForm detail={deatilArray}></InputForm>
    
      
    </div>
  );
}

export default App;
