/*
filename and function name should be same
firstletter should be capital
*/
import { useRef, useState } from 'react';
import './App.css'

export default function Login(){
  // need to import useRef in order to use.
  ///to get the value from the text box need to use reference `ref`
  let emailInput = useRef();
  let passwordInput = useRef();
  let nameInput = useRef();
  let jobInput = useRef();
  let responseRef = useRef();
  let pageNoRef = useRef();
  //state variables
  //getter setter
  const[name,setName]= useState();
  const[userResponse,setUserResponse]= useState();  
  const[userList,setUserList]= useState();  
  const[currentCssName,setcurrentCssName]= useState();  
  //call this function from the button click
  const getAndUpdateTheName=()=>{
    setName(nameInput.current.value);
  }
  


  /*
  urlendpoint https://reqres.in/api/users?page=2
  methodtype->get,post,put,delete
  params to send(post,put,delete)
  */

  const getApiIntegration= async()=>{
    let pageNo = pageNoRef.current.value;
    
  //await will hold the execution till it gets the response.
    let serverResponse = await fetch("https://reqres.in/api/users?page="+pageNo,
    {method:"GET"})
    
    console.log(serverResponse);
    //extract the json data from serverResponse.  
    let response = await serverResponse.json(); 
  
    console.log(response);
    setUserList(response['data']);//userlist from the server response.
}   

const postApiIntegration= async()=>{
  //if name or job is empty throw the error and should not call the api.
    let params = {
      "name":nameInput.current.value,
      "job": jobInput.current.value
  }
  //await will hold the execution till it gets the response.
    let serverResponse =   await fetch("https://reqres.in/api/users",
    
    {
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(params)//javascript object to string object
  })
    //console.log(serverResponse);
    //extract the json data from serverResponse.  
    let response = await serverResponse.json(); 
    console.log(response);
   // responseRef.current.innerHTML= JSON.stringify(response);
   setUserResponse(response);//update state variable
}

  //arrow function
  const validate=()=>{
    if(emailInput.current.value == "" || emailInput.current.value ==undefined){
      alert("Please enter the email!!!");
    }else if(passwordInput.current.value == "" || passwordInput.current.value ==undefined){
      alert("Please enter the password!!!");
    }else{
      alert("everything is fine");
    }
  }
  const changeBg=(cssName)=>{
    setcurrentCssName(cssName);
  }
    return(
        <div className="App">
        <h1>Login page validation</h1>
        <input type="text" ref={nameInput} placeholder="Enter Name"/>
        <input type="text" ref={jobInput} placeholder="Enter JOB"/>
        <button onClick={()=>validate()}>Click me</button>
        <button onClick={()=>getApiIntegration()}>Click to call GET rest api</button>
        <button onClick={()=>postApiIntegration()}>Click to call POST rest api</button>
      <h1 ref={responseRef}></h1>
      <div>
        Id is {userResponse?.id}
        Created Time is {userResponse?.createdAt}
      </div>
      <h1>{name}</h1>
      <button onClick={()=>getAndUpdateTheName()}>
        Click to update State variable
        </button>

        <input type='text' placeholder='Enter Page No' ref={pageNoRef} />
        {/* ternary operator */}
        {userList && userList.length == 0?<h1>No User Found</h1>:''}
        {userList && userList.map((obj,index)=>{
             return <div key={index}>
                {obj.first_name}--{obj.email}
                <img src={obj.avatar}/>
             </div>
        })}  

        
        <div>
          <h1 className={currentCssName}>Can you change the background color.?</h1>
          {currentCssName}
          <button onClick={()=>changeBg('red')}>Red</button>
          <button onClick={()=>changeBg('blue')}> Blue</button>
        </div>
      </div>
    
    )

}
