import React from 'react'

export default function B3() {
    let  name:string = "hoa";
    let  gender:string = "nam";
    let  dob:number=  12/12/1999;
     let email:string =  "hoa@gmail.com";
     let address:string =  "123 street"
 
    type Obj = {
        name: string;
        gender: string;
        dob: number;
        email: string;
        address : string;
    }
    
    
  return (
    <div>
      <h1>B3</h1>
        <h2>Thông tin cá nhân</h2>
        <ul>
            <li>Họ và tên : <b>{name}</b></li>
            <li>giới tính : <b>{gender}</b></li>
            <li>Ngày sinh : <b>{dob}</b></li>
            <li>Email:<b> {email}</b></li>
            <li>Address:<b>{address}</b></li>
        </ul>
    </div>
  )
}
