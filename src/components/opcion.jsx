import React from "react";

export default class Opcion extends React.Component{
    render(){
        return(
        <div className="opcion">
        <button  className="botones" onClick={this.props.handleClick}>
          {this.props.children}
        </button>
        <h2>{this.props.opcion}</h2>
      </div>
      )
    }


}