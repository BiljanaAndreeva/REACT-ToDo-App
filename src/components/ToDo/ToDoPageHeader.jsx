import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import TextField from '@material-ui/core/TextField';

const ToDoPageHeader=({onChangeHandler})=>{
    return(
        <Card>
            <CardHeader title="Add new ToDo"/>
                <form noValidate autoComplete="off">
                    <TextField 
                        name="todoTitle"
                        label="ToDo Title"
                        onChange={onChangeHandler}
                    />
                    <TextField 
                        name="todoContent"
                        label="ToDo Content"
                        onChange={onChangeHandler}
                    />
                </form>
        </Card>
    );
}
export default ToDoPageHeader;