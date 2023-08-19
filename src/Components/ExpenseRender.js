import ExpensesFilter from "./ExpensesFilter";
import React,{useState} from "react";
import Card from './Card';
import './ExpenseRender.css';
function ExpenseRender(props)

{
      const [filteredYear,setFilteredYear]=useState('2020');

       function UpdateOnRenderHandler(selectedYear)
       {
    
       setFilteredYear(selectedYear);
       }
       const filteredByYear=props.detail.filter(expense=>{
              return expense.date.getFullYear().toString()=== filteredYear;
       });


       return(
         <div>
              
        <Card className="expenses">
        <ExpensesFilter onRenderFilter={UpdateOnRenderHandler} selected={filteredYear}/>
        
        {/* <ExpenseList detail={filteredByYear}/> */}
        
        </Card>
        </div>
       );
}
export default ExpenseRender;