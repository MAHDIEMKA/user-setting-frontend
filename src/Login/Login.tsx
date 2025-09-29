import { Component } from 'react';


type MyProp ={
    name: string;
    age: number;
};


export default class Login extends Component<MyProp> {
  render() {
    return (
      <>
        <div>{this.props.name} is {this.props.age} years old</div>
      </>
    )
  }
}

{/* <Login name ="mahdi"/> */}