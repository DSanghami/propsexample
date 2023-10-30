import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
function App(props) {
 // console.log(this.process.argv[0]);
  //console.log(this.process.argv[1]);
 // console.log(this.process.aegv[2]);
 // console.log(this.process.argv.length + 'parameters' ); 
  var username = prompt("Enter your name");
  if(props.name == username){
    var today = new Date();
    if(today.getHours() >= Number(props.visitingTime)){
  return (

    <div className="App">
      <b>Welcome Mr/Mrs</b> {props.firstName} &nbsp; &nbsp; {props.lastName}
      <input type='text' minLength="10" maxLength="20" ></input>
    </div>
  );}
  else{
    return(<div className='App'><b>Visit after {props.visitingTime} AM in your local time</b></div>)
  }
}
else {
  return(<div className='App'><b>{props.username}Your account is blocked. Please contact administration.</b></div>)
}
}

export default App;