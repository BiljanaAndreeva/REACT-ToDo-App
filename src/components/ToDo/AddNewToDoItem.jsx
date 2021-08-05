import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

const AddNewToDoItem = ({AddNewToDoHandler}) =>{
    return(
        <Card style={{height:"100%"}}>
            <Button 
                color = "primary"
                style={{height:"100%",width:"100%"}}
                onClick={AddNewToDoHandler}
            >
                Add +
             </Button>
        </Card>      
    );
}
export default AddNewToDoItem;