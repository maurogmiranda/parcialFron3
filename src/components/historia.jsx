import React from "react";
import Data from "./data.json"


class Historia extends React.Component{
constructor(props){
    super(props)
    this.state = {paso:1, contenido: Data[0].historia, eleccionAnterior:"", listaDeElecciones:[], opcionA: Data[0].opciones.a , opcionB:Data[0].opciones.b}
    this.handleChangeBotonA = this.handleChangeBotonA.bind(this)
    this.handleChangeBotonB = this.handleChangeBotonB.bind(this)
}

handleChangeBotonA() {
    let nuevoPaso = this.state.paso +1
    if(nuevoPaso<=5){
        let siguienteHistoria = Data.filter(data=> data.id ===nuevoPaso+"a")[0]
        
        this.setState({paso: nuevoPaso,eleccionAnterior:"A",contenido:siguienteHistoria.historia,opcionA:siguienteHistoria.opciones.a,opcionB:siguienteHistoria.opciones.b} )
        if(nuevoPaso>2){
            let nuevaListaElecciones = [...this.state.listaDeElecciones,this.state.eleccionAnterior]
            this.setState({listaDeElecciones:nuevaListaElecciones})
        }
    }
}

handleChangeBotonB(){
    let nuevoPaso = this.state.paso+1
    if(nuevoPaso<=5){
        let siguienteHistoria = Data.filter(data=> data.id ===nuevoPaso+"b")[0]
        this.setState({paso:nuevoPaso, eleccionAnterior:"B",contenido:siguienteHistoria.historia,opcionA:siguienteHistoria.opciones.a,opcionB:siguienteHistoria.opciones.b} )
        if(nuevoPaso>2){
            let nuevaListaElecciones = [...this.state.listaDeElecciones,this.state.eleccionAnterior]
            this.setState({listaDeElecciones:nuevaListaElecciones})
        }
    }
}

render(){
    return (
        <> 
         
        <div className="historia">{this.state.contenido}</div>
        <div className= "opcion">
        <button className="botones" onClick={this.handleChangeBotonA}>A</button>
        <span className="opciones">{this.state.opcionA}</span>
        </div>
       
        <div className= "opcion">
        <button className="botones" onClick={this.handleChangeBotonB}>B</button>
        <span className="opciones">{this.state.opcionB}</span>
        </div>
        <div className="recordatorio">
            <p>Seleccion anterior: {this.state.eleccionAnterior}</p>
            <p>Historial de elecciones elegidas: </p><ul> {this.state.listaDeElecciones.map((eleccion,index)=><li key={eleccion + index}>{eleccion}</li>)}</ul>
        </div>
    
        </>
    )
}

}

export default Historia