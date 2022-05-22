import React from "react";
import PropTypes from "prop-types";

import './ToDoListItem.scss';

const ToDoListItem = (props) => {
    return (
        <li className="todo-list-item">
            <input
                type="checkbox"
                onChange={(evt) => props.onChange(props.item.id, evt.target.checked)}
                checked={props.item.done}
            />
            <span className={props.item.done ? 'todo-title completed' : 'todo-title'}>{props.item.title}</span>
            <span className="todo-delete-button" onClick={(evt) => props.onDelete(props.item.id)}>delete</span>
        </li>
    );
};

ToDoListItem.propTypes = {
    item: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default ToDoListItem;
