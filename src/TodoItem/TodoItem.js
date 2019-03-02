import React from 'react';

import './TodoItem.css';

const todoItem = props => {
  const completeStyle = {
    fontStyle: 'italic',
    color: '#666',
    textDecoration: 'line-through',
  };

  return (
    <div className="TodoItem">
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={() => props.onChange(props.item.id)}
      />
      <p style={props.item.completed ? completeStyle : null}>
        {props.item.text}
      </p>
    </div>
  );
};

export default todoItem;
