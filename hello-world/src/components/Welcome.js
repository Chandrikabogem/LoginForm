import React, {Component}  from "react";
class Welcome extends Component{
   /*  constructor(){
        super()
            this.state={
message:"heloo user"
            }
        
    } */
    render(){
        const {name,lname}=this.props
        return (
         
            <div>
<h1>Hello {name}{lname} yes</h1>
<p>Welcome to Class</p>
<button>Submit</button>
<h1>Hello Chandrika <h1/>
            </div>
        )
    }
}
export default Welcome
