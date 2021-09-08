import React from "react";

export default class Recordatorio extends React.Component{
    render(){
        return(
            <div className="recordatorio">
            <h3>Seleccion anterior: {this.props.eleccionAnterior}</h3>
            <h4>Historial de elecciones elegidas: </h4><ul>{this.props.listaElecciones}</ul>
        </div>
        )
    }
}