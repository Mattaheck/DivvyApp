import React, { Component } from 'react';
import Calendar from './Calendar';
// import CurrencyInput from 'react-nebo15-currency-input';
import CurrencyInput from 'react-currency-input';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';


class AddGoals extends Component {
  constructor(props){
      super(props);
      this.state = {
        date: ["12/05/2009"],
        startDate: moment(),
        value: '',
        dateDif: '',
        currency: ''
      }
      this._addDate = this._addDate.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }


    _addDate(newDate){
      let currentDate = this.state.date;
      currentDate.push(newDate);
      this.setState({date: currentDate});
    }


    _handleSubmit(e){

      let newDate = this.refs.startDate.value;
      this.props.addDate(newDate);
      this.refs.startDate.value = '';

    }


    handleChange(date) {
      this.setState({
        newDate: date
      });
      
    }

    changeValue = (value, daysDif) => {
      console.log('value is: ',value)
      console.log('please work')
      console.log(value/daysDif)


    }

    buttonSubmit(value, daysDif){
      console.log("Button was clicked and value is ", this.changeValue)
      console.log("date ",this.state.date)
      console.log("startdate ",this.state.startDate)
      console.log("value ",this.state.changeValue)
      console.log("datedif  ",this.state.dateDif)
      console.log(value/daysDif)
    }


 render(){

   return(
     <body>
     <div>
       <h2>Add Goals content will go here</h2>


        $<CurrencyInput value={this.state.currency} onChange={this.changeValue}/>

        <br/>

        <Calendar/>


        <br/>

        <button className="" name="" onClick={this.buttonSubmit}>submit</button>
       </div>
       <div>
         {this.addDate}
       </div>

    </body>

   )
 }
}

export default AddGoals;
