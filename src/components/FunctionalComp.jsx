import React,{useState,useEffect} from 'react';
import Button from '@material-ui/core/Button';

const FunctionalComp = () =>{

    const [state, setState] = useState({
        test:"testFunction"
    });

    useEffect(()=>{
        console.log("useEffect function like didMount");
    },[]);

    useEffect(()=>{
        console.log("useEffect function like update");
    });

    useEffect(()=>{
        console.log("change"+JSON.stringify(state));
    },[state]);

    const clickHandler=()=>{
        setState({test:"Andreeva"});
    };

    
    return (
        <div>
            <h1>Fonctional component</h1>
            <h2>by biljana</h2>
            <h2>{JSON.stringify(state)}</h2>
            <button onClick={clickHandler}> Click me </button>
            <Button variant="contained" color="secondary">
  click here
</Button>
        </div>
    );
    
}
export default FunctionalComp;