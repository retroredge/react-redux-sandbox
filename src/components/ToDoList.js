import React from 'react';
import PropTypes from 'prop-types';

import ToDo from './ToDo';
import {connect} from "react-redux";

const ToDoList = ({items}) => {
    console.log('ToDoList items: ' + JSON.stringify(items));
    return <div>
        <h1>To Do List</h1>
        <ul>
            {
                items.map((theItem, i) => {
                    return <ToDo key={i} item={theItem} />;
                })
            }
        </ul>
    </div>
};

ToDoList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string.isRequired)
};

const mapStateToProps = (state) => {
    console.log('mapStateToProps state is: ' + JSON.stringify(state));
    return { items: state.toDoList.items }
};

export default connect(mapStateToProps)(ToDoList);