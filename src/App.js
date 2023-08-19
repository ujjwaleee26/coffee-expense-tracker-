import React,{useState} from 'react';
import CYngH5 from  './assets/images/CYngH5.jpg';
import InputForm from './Components/InputForm';
import ExpenseRender from './Components/ExpenseRender';
import './App.css';
const Dummy_Data = [
  {
    orderId: '#123',
    amount : 12,
    date : new Date(2023,8,18),
  },
  
];

function App() {
  const[deatilArray,setDetailArray]=useState(Dummy_Data);
  function addExpenseHandler(expense)
  {
        
        setDetailArray((prevData)=>{
          return([ expense,...prevData]);
        });
      }
  return (
    <div className='bg'>
      
         <img src={CYngH5} alt="coffe bean background" />
        <InputForm onAddExpense={addExpenseHandler}></InputForm>
        <ExpenseRender detail={deatilArray}/>
    
      
    </div>
  );
}

export default App;
