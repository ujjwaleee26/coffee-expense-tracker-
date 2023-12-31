import React from "react";
import './InputForm.css';
import FormTag from './FormTag';
function InputForm(props)
{
    function SaveExpenseDetailsHandler(enteredExpenseData)
    {
         const expenseData={
             ...enteredExpenseData,
             id: Math.random().toString()
    };
   
    props.onAddExpense(expenseData);
}
      return(
        <div className="new-expense">
            <FormTag onSaveExpenseDetails={SaveExpenseDetailsHandler}/>
        </div>
      )
}
export default InputForm;