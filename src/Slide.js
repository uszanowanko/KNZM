import React, { Component } from "react";
const Slide = (props) => (
  <li
    className={props.active ? "enabled" : "disabled"}

    onClick={() => props.changeStatus(props.id)}
  >
    {props.name}
  </li>
)

// style={props.active ? { fontWeight: 'bold' } : { color: 'gray' }}
 
export default Slide;