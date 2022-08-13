import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  const [userName ,setUserName] = useState("");
  const [email ,setEmail] = useState("");
  const [gender ,setGender] = useState("Male");
  const [phone ,setPhone] = useState("");
  const [pass ,setPass] = useState("");
  const [err ,setErr] = useState("");

  const handleName = (e) =>{
    setUserName(e.target.value);
  }
  const handleEmail = (e) =>{
    setEmail(e.target.value);
  }
  const handleGender = (e) =>{
    setGender(e.target.value);
  }
  const handlePhone = (e) =>{
    setPhone(e.target.value);
  }
  const handlePass = (e) =>{
    setPass(e.target.value);
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(!userName || !email || !phone || !pass ){
      setErr("All fields are mandatory");
      return;
    }
    else if(!userName.match(/^[0-9a-z]+$/)){
      setErr("Name is not alphanumeric");
      // e.preventDefault();
      return;
    }
    else if(!email.match(/\S+@\S+\.\S+/)){
      setErr("Email must contain @");
      // e.preventDefault();
      return;
    }
    else{
      var name = email.substring(0, email.lastIndexOf("@"));
      setErr("Hello "+name);
      // e.preventDefault();
    }
  }
  


  return (
    <div id="main">
      <h1>Main Form</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" data-testid='name' autoComplete="off" onChange={handleName}/>

        <label htmlFor="email">Email address</label>
        <input type="email" data-testid = 'email' autoComplete="off" onChange={handleEmail}/>
        
        <label htmlFor="gender">Gender</label>
        <select name="" data-testid = 'gender' onChange={handleGender} value={gender}>
            <option >Male</option>
            <option >Female</option>
            <option >Other</option>
        </select>
        
        <label htmlFor="phone">Phone Number</label>
        <input type="number" data-testid = 'phoneNumber' autoComplete="off" onChange={handlePhone}/>
        
        <label htmlFor="password">Password</label>
        <input type="password" data-testid = 'password' autoComplete="off" onChange={handlePass}/>
        
        <button type="submit" data-testid = 'submit'>Submit</button>
        <p>{err}</p>
        
      </form>
    </div>
  )
}


export default App;
