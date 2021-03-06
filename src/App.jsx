import React from 'react';
import './App.scss';
import ToDoList from "./ToDoList/ToDoList";
import PropTypes from "prop-types";

function App(props) {
    return (
        <div>
            <div>
                <h1>Jest/Enzyme Testing Challenge</h1>
                <h2>To-Do List</h2>
                <hr/>
                <p><em>Hey! Don't forget the milk!</em></p>
            </div>
            <ToDoList apiBase={props.config.apiEndpointBase}/>
        </div>
    );
}

App.propTypes = {
    config: PropTypes.object.isRequired
};

export default App;
