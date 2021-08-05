import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

const ToDoItem = ({todoData, deleteToDoItemHandler}) =>{
    return(
        <div style={{paddingBottom:5}}>
            <Card>
                <CardHeader title={
                    <div>
                        {todoData.title} <Button onClick={deleteToDoItemHandler}>x</Button>
                    </div>
                }
                />
                <CardContent>{todoData.content}</CardContent>
            </Card>
        </div>
    );
}
export default ToDoItem;