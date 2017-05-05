import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
import CurrencyInput from 'react-currency-input';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class AddGoals extends Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment(),
      val: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.buttonSubmit = this.buttonSubmit.bind(this);
  }
  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
  changeValue = (val) => {
    // console.log('value is: ',val)
    // console.log('please work')
    this.setState({
      amount: val
    })
  }
  buttonSubmit()  {
    let numVal = this.state.amount.replace(/\$/g, '');
    this.setState({
      days: this.state.dateDif,
      daily: ("$"+ (numVal/this.state.dateDif).toFixed(2))
    })
    // console.log("Button was clicked and value is ", this.changeValue)
    // console.log("startDate",this.state.startDate)
    console.log("goal cost is  ",this.state.amount)
    console.log("number of days needed to save", this.state.dateDif)
    console.log("amount needed per days is $" + (numVal/this.state.dateDif).toFixed(2))
    // let days = `datedif  , this.state.dateDif `;
    // let daily = "$" + (numVal/this.state.dateDif).toFixed(2))
  }
  // class SaveGoals extends Component {
  //
  // }
 render(){
   return(
     <div>
      <div>
       <h2>Add Goals content will go here</h2>
        How much will it cost?
        <br/>
        <CurrencyInput
        value={this.state.amount}
        prefix={"$"}
        onChange={this.changeValue}/>
        <br/>
        When do you want it by?
        <br/>
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
          onSelect={
            (value) => {
              const dateDif = Math.round((new Date(value._d)-new Date())/(24*60*60*1000));
              let goalDate = value._d;
              console.log('Days Difference is ', dateDif)
              console.log('Goal end date is ', goalDate)
              this.setState({
                dateDif: dateDif
              });
            }
          }
        />
        <br/>
        <button activeClassName="active" className="link" name="" onClick={this.buttonSubmit.bind(this)}>Get Results!</button>
       </div>
       <div >
        You have to save xx amount every day for xx days to reach your goal on xx!
        <br/>
        <button><Link to="/Goals" activeClassName="active" className="link">Save Goals!</Link></button>
       </div>
     </div>
   )
 }
}
export default AddGoals;
