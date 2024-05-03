// import React from 'react'

export default function Functional() {
    let age:number = 20;
    let fullName:string = "minh thu";
    let myArr :string [] = ["hoa","hồng","ngọc","anh"];
    type Obj = {
        name:string;
        age:number;
        address:string;
    }
    let newStudent:Obj = {
        name:"phuong",
        age:20,
        address:"hà nội"
    }
    return (
      <>Functional
      <p>cin chào {fullName}</p>
      <p>năm nay {fullName} {age} tuổi!</p>
      <ul>
      {myArr.map((item,index)=>{
          return <li key={index}>{item}</li>
      })}
      </ul>
      <p>{JSON.stringify(newStudent)}</p></>
    )
  
}
