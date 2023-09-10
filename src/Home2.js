
import React, { createRef } from "react";
export default class Home2 extends React.Component{
    //`this` current object
    state={
        "name":"Your name",
        "email":"sample email",
        nameList:[
            {"name":"sample1"},
            {"name":"sample2"},
            {"name":"sample3"}
        ]
    }
  
    nameRef = createRef();//for binding the HTML elements into react
 
    showAlert(){
        this.setState({"name":this.nameRef.current.value});
        alert("sample aler from react clas compo");
    }
    render(){
        return(
            <> 
                <h1>sample React component
                {this.state.name}
                {this.state.email}
                </h1>
                {
                    this.state.nameList.map((obj,index)=>{
                        return (
                            <h1>{obj.name}</h1>
                        )
                    })
                }
                <input type="text" ref={this.nameRef} placeholder="Enter Name"/>
                <button onClick={()=>this.showAlert()}>CLick me</button>
            </>

        )
    }
    
}