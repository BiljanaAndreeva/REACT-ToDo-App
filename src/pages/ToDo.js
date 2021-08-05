import React,{useState} from 'react';
import {sortableContainer, sortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';
import BaseLayout from './_Layout/BaseLayout';

import ToDoPageHeader from '../components/ToDo/ToDoPageHeader';
import AddNewToDoItem from '../components/ToDo/AddNewToDoItem';
import ToDoItem from '../components/ToDo/ToDoItem';

import Grid from '@material-ui/core/Grid';

import './pageStyle.css';

const SortableContainer = sortableContainer(({children}) => {
    return <ul className="dragableContainer">{children}</ul>;
});
const SortableItem = sortableElement(({value}) =>  (
    <div>{value}</div>

));


const ToDo=()=>{
    const [toDoData, setToDoData]=useState([
        {id:0, title:"ToDo 1", content: "todoItem1 content"},
        {id:1, title:"ToDo 2", content: "TodoItem2 content"},
        {id:2, title:"ToDo 3", content: " todoItem3 content"},
    ]);

    const [newToDoState,setNewToDoState]=useState();

    

    const AddNewToDo=()=>{
        setToDoData([
            ...toDoData,
            {
                id:toDoData.length+1,
                title:newToDoState.todoTitle,
                content: newToDoState.todoContent,
            }
        ]);
        };

        const deleteToDoItem = (id) => {
            const toDoDataCopy = toDoData;
            const indexToDelete = toDoDataCopy.findIndex((item) => item.id===id);
            toDoDataCopy.splice(indexToDelete, 1);
            setToDoData([...toDoDataCopy]);
        };

        const onChange=(event)=>{
            setNewToDoState({
                ...newToDoState,
                [event.target.name]:event.target.value
            });
        };

        const onSortEnd = ({oldIndex, newIndex, collection}) => {
            let copyToDoData = toDoData;
            copyToDoData = arrayMove(copyToDoData,oldIndex,newIndex);
            setToDoData([...copyToDoData]);

        };



    return(
        <BaseLayout>
            <div className="page-content-container">
                <Grid container spacing={3}>
                    <Grid key='title' item xs={10}>
                        {JSON.stringify(newToDoState)}
                        <ToDoPageHeader onChangeHandler={onChange}/>
                    </Grid>

                    <Grid key='Add-new' item xs={2}>
                        <AddNewToDoItem AddNewToDoHandler={AddNewToDo}/>
                    </Grid>

                    <SortableContainer class="dragableContainer"
                        key="sortableContainer" 
                        onSortEnd={onSortEnd} 
                        lockAxis="y" 
                        distance="2">

                    
                        {toDoData.map((todoItem, index) => (
                            <SortableItem 
                                key={todoItem.id}
                                index={index}
                                collection={0}
                                value={
                                <Grid item xs={12}>
                                    <ToDoItem 
                                        todoData={{
                                            id:todoItem.id,
                                            title:todoItem.title,
                                            content:todoItem.content,
                                        }}
                                        deleteToDoItemHandler={() => deleteToDoItem(todoItem.id)}
                                        />
                            
                                </Grid>} />
                            )   
                            )
                            };

                    </SortableContainer>
                        
                    
            
                </Grid>
            </div>
        </BaseLayout>
            
    );
}

export default ToDo;