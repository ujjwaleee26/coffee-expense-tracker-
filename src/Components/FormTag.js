import './FormTag.css';
import React,{useState} from 'react';
function FormTag(props)
{
     
     const[enteredAmount,setEnteredAmount]=useState('');
     const[enteredDate,setEnteredDate]=useState('');
    
    function amountChangeHandler(event)
    {
        setEnteredAmount(event.target.value);
        
    }
    function dateChangeHandler(event)
    {
        console.log(event.target.value);
         setEnteredDate(event.target.value);
    
    }
    
    function submitHandler(event)
    {
           event.preventDefault();
           const pushData={
            
            amount:+enteredAmount,
            date:new Date(enteredDate),
           };
         
         props.onSaveExpenseDetails(pushData);
        //    setEnteredTitle('');
           setEnteredAmount('');
           setEnteredDate('');
           setShowForm(false);
           setButtonShow(true);
        
    }
    const[showForm,setShowForm]=useState(false);
    const[buttonShow,setButtonShow]=useState(true);
    function formDiplay()
    {
        setShowForm(true);
        setButtonShow(false);
    }
    function CloseForm()
    {
        setShowForm(false);
        setButtonShow(true);
    }



  return(
    <div>
    {showForm && (<form onSubmit= {submitHandler}>
        
        <div className='new-expense__controls'>
            
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
            </div>
            <div className='new-expense__control'> 
                <label>Date</label>
                <input type='date' min="2022-01-01" max="2024-12-31" value={enteredDate} onChange={dateChangeHandler}/>
            </div>
        </div>
       
        <div className='new-expense__actions '>
         <button  onClick={CloseForm}>Cancel</button> 
        <button type='submit'>Add Expense</button>  
 
        </div>
       
    </form>)}
    {buttonShow && (<button onClick={formDiplay}>Add New Expenses</button>)};
    </div> 
   
  );
  }
export default FormTag;