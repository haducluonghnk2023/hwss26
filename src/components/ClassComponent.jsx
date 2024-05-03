import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(){
        super();
        this.state = {
            name: "minh thu",
            address:"hà nội",
            cart:[
                {
                    id:1,
                    product:"iphone5",
                    quantity:5
                }
            ]
        }
    }
  render() {
    return (
      <div>ClassComponent
        <p>xin chào {this.state.name}</p>
        <p>địa chỉ ở {this.state.address}</p>
        <ul>
            {this.state.cart.map((item)=>{
                return <li key={item.id}>{item.product}</li>
            })}
        </ul>
      </div>
    )
  }
}
