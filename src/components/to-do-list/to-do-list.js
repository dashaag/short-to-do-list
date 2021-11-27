import './to-do-list.css';
import * as React from 'react';
import { useContext } from 'react';
import { TaskContext } from '../../contexts/taskContext';
import ToDoItem from '../to-do-item/to-do-item';
import List from '@mui/material/List';

function ToDoList () {
    const [tasks, setTasks] = useContext(TaskContext);

    return <div>
        <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {tasks.map(task => 
                <ToDoItem task={task}/>
            )}
        </List>
    </div>;
}

export default ToDoList;