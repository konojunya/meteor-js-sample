import React from 'react';
 
export default class Task extends React.Component {
  render() {
    return (
      <li>{this.props.task.text}</li>
    );
  }
}