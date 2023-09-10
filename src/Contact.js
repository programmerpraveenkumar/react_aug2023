import Footer from "./Footer"
import Header from "./Header"
import {  useRef } from "react";

export default function Contact(){
  let nameRef = useRef();
  let phoneNo = useRef("");
  let email = useRef("");
  let message  = useRef("");
  const validate= async ()=>{
    if(nameRef.current.value == ''){
      alert("name should not be empty!!!");
    }else if(phoneNo.current.value == ""){
        alert("Phone no should not be empty!!!");
    }
    //add else if for email,message
    else{
      // alert("everything is ok ");
      let data = {
          "name":nameRef.current.value,
          "job":message.current.value
      }
      let serverResponse = await fetch("https://reqres.in/api/users",
      {
        method:"POST",
        body:JSON.stringify(data),
        "headers":{'content-type':"application/json"}
      })
      let jsonResponse = await serverResponse.json();
      alert("User is created at "+jsonResponse['createdAt'])
    }
  }
    return(
        <>
             <Header/>
             <section class="contact_section layout_padding">
    <div class="container">
      <div class="heading_container">
        <h2>
          Request A call back
        </h2>
      </div>
      <div class="row">
        <div class="col-md-8 mx-auto">
          <div class="form_container">
           
              <div class="form-row">
                <div class="form-group col-md-6">
                  <input type="text" class="form-control" ref={nameRef} id="inputName4" placeholder="Name "/>
                </div>
                <div class="form-group col-md-6">
                  <input type="text" class="form-control" id="inputSubject4" placeholder="Phone"/>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col">
                  <input type="email" class="form-control" id="inputEmail4" placeholder="Email id"/>
                </div>
              </div>
              <div class="form-group">
                <input type="text" class="form-control" ref={message} id="inputMessage" placeholder="Message"/>
              </div>
              <div class="d-flex justify-content-center">
                <button onClick={()=>validate()} type="submit" class="btn btn-primary">Send</button>
              </div>
            
          </div>
        </div>
      </div>
      <div class="contact_items">

        <a href="">
          <div class="img-box">
            <img src="images/location.png" alt=""/>
          </div>
          <h6>
            Loram Ipusum ari
            lo elisant na
          </h6>
        </a>
        <a href="">
          <div class="img-box">
            <img src="images/call.png" alt=""/>
          </div>
          <h6>
            (+12 1234456789)
          </h6>
        </a>
        <a href="">
          <div class="img-box">
            <img src="images/mail.png" alt=""/>
          </div>
          <h6>
            demo@gmail.com
          </h6>
        </a>

      </div>
      <div class="social_container">
        <div class="social-box">
          <div>
            <a href="">
              <img src="images/fb.png" alt=""/>
            </a>
          </div>
          <div>
            <a href="">
              <img src="images/twitter.png" alt=""/>
            </a>
          </div>
          <div>
            <a href="">
              <img src="images/linkedin.png" alt=""/>
            </a>
          </div>
          <div>
            <a href="">
              <img src="images/insta.png" alt=""/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer/>
        </>
    )
}