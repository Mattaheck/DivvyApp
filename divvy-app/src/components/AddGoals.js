import React, { Component } from 'react';
import Calendar from './Calendar';
import CurrencyInput from 'react-nebo15-currency-input';

class AddGoals extends Component {
 render(){
   return(
     <body>
     <div>
       <h2>Add Goals content will go here</h2>
       <CurrencyInput
         className=""
         type="text"
         decimalSeparator="."
         precision={2}
         onChange={(value) => console.log('Change', value)}
        />

        <br/>
        <Calendar/>
        <br/>
        <button className="" name="">submit</button>
       </div>
       </body>

   )
 }
}

export default AddGoals;
