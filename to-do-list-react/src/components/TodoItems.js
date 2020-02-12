import React, { Component } from 'react';

class TodoItems extends Component {
    constructor(props) {
        super(props);

        this.createTasks = this.createTasks.bind(this);

    }

    createTasks(item) {
        return <li onClick={() => this.delete(item.key)}
        key={item.key}>{item.text}</li>
    }
    
    delete(key) {
        this.props.delete(key);
    }


    render() {
        let todoEntries = this.props.entries;
        let listItems = todoEntries.map(this.createTasks);

        return (
            <div>
            <ul className="theList">
                {listItems}
            </ul>
                
            </div>
        );
    }
}
export default TodoItems;
