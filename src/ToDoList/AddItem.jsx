import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

import './AddItem.scss';

const AddItem = (props) => {
    const [newTitle, setNewTitle] = useState("");
    return (
        <div>
            <form
                className="todo-add"
                onSubmit={evt => {
                    evt.preventDefault();
                    props.onAdd(newTitle);
                    setNewTitle('');
                }}>
                <label htmlFor="add-item">New To-Do Item:</label>
                <input type="text" id="add-item" value={newTitle} onChange={evt => setNewTitle(evt.target.value)}/>
                <input type="submit" value="Add"/>
            </form>
        </div>
    );
}

AddItem.propTypes = {
    onAdd: PropTypes.func.isRequired,
};

export default AddItem;
