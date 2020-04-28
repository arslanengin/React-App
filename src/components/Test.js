import React, { Component } from 'react'

 class Test extends Component {
     constructor(props){
        super(props);
        this.state = {
            a:10
        }
        console.log("Constructor");
     }
     componentDidMount() {
         console.log("componentDidMount");
         //API istekleri
         this.setState({
             a:20
         })
     }
     componentDidUpdate(prevProps, prevState) {
         console.log("Component Did update")
     }
     shouldComponentUpdate(){
         console.log("should component update");
         return true;
     }
     
    render() {
        console.log("Render");
       
        return (
            <div>
                
            </div>
        )
    }
}
export default Test;