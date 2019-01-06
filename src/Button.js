import React, { Component } from "react";

class Button extends Component {
    render(){
        return <button className = {this.props.className} onClick={this.onClick}>{this.props.name}</button>
    }
    onClick = () => {
        this.props.history.push(this.props.href)
      }
}
export default Button;