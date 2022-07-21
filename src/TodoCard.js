import React from 'react';

const buttonStyle = {
    backgroundColor: 'orange',
    color: 'white',

}

function TodoCard(props) {
    const {title, clickToRemove, index} = props; 
    return (
        <li style={{Color: 'pink'}}>{props.title};
            <button style={buttonStyle} onClick={() => {props.clickToRemove(props.index)}}>Remove</button>
        </li>
        
    )
};

export default TodoCard;