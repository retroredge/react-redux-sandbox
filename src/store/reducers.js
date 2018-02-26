import { combineReducers } from 'redux'
import toDoList from './ToDoListReducer';

const app = combineReducers({
    toDoList
});

export default app