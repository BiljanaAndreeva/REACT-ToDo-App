import React from 'react';
import {Component} from 'react';

class ClassComp extends Component {
    constructor(props){
        super(props);
        const {test}=props;

        this.state={
            test:"test"
        };

 //       this.clickHandler=this.clickHandler.bind(this);

        console.log(JSON.stringify({test}));
    }

    componentDidMount(){
        console.log("didMount");
        this.setState({test: "test2"});

    }

    componentDidUpdate(){
        console.log("didUpdate");

    }

    componentDidUnmount(){
        console.log("didUnmount");

    }
    
//   clickHandler(){
  //      console.log(JSON.stringify(this.state));
    //}

    clickHandler2=()=>{
        this.setState({test:"Biljana"},()=>{
            console.log(JSON.stringify(this.state));

        });
        

    }


    render(){
        return ( 
        <div>
            <h1>Ova e class komponenta</h1>
            <h2>jhgfttt</h2>
            <h1>{JSON.stringify(this.state)}</h1>
            <button onClick={this.clickHandler2}> Click me </button>
        </div>
        );
    }
}
export default ClassComp;