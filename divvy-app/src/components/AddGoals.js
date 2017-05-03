import React, { Component } from 'react';
// import $ from 'jquery';

class AddGoals extends Component {
 render(){
   return(
     <body>
     <div>
       <h2>Add Goals content will go here</h2>


         <input name='amount' size='6' placeholder='0'/>Goal Price
         <br/>
         <form  class='sumtable'>
         <input className='amount' size='6' placeholder='0'/>Starting Cash
         <br/>
         <p><input type="text" name="datepicker" id="datepicker"/> Date</p>

         <p><button class="submit">submit</button></p>
         <td>&nbsp;</td>
         <br/>
         <p>
         <font face='Verdana' size='2'> New Total Needed: $
         </font>
         </p>
         <br/>
         <font face='Verdana' size='2'><span class='balance'>0</span></font>
         <br/>
         </form>

         <p class="results">

         </p>

         <p class="finalResults">

         </p>
       </div>
       </body>

   )
 }
}

export default AddGoals;
