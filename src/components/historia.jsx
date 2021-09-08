import React from "react";
import Opcion from "./opcion";
import Recordatorio from "./recordatorio"
import Data from "./data.json"

let contador = 2;

class Historia extends React.Component{
constructor(props){
    super(props)

    this.state = {
        contenido: Data[0].historia,
        eleccionAnterior:"",
        listaDeElecciones:[],
        opcionA: Data[0].opciones.a,
        opcionB:Data[0].opciones.b}

    this.handleChangeBotonA = this.handleChangeBotonA.bind(this)
    this.handleChangeBotonB = this.handleChangeBotonB.bind(this)
}

componentDidUpdate() {
  
   contador = contador + 1
   
  }

handleChangeBotonA() {
   
    
    if(contador<=5){
        
        let siguienteHistoria = Data.filter(data=> data.id ===contador+"a")[0]
        
        this.setState({
            eleccionAnterior:"A",
            contenido:siguienteHistoria.historia,
            opcionA:siguienteHistoria.opciones.a,
            opcionB:siguienteHistoria.opciones.b} )
        if(contador>2){
            let nuevaListaElecciones = [...this.state.listaDeElecciones,this.state.eleccionAnterior]
            this.setState({
                listaDeElecciones:nuevaListaElecciones})
        }
    }else{
        alert("Fin")
    }
}

handleChangeBotonB(){
    
    if(contador<=5){
        let siguienteHistoria = Data.filter(data=> data.id ===contador+"b")[0]
        this.setState({
            eleccionAnterior:"B",
            contenido:siguienteHistoria.historia,
            opcionA:siguienteHistoria.opciones.a,
            opcionB:siguienteHistoria.opciones.b} )
        if(contador>2){
            let nuevaListaElecciones = [...this.state.listaDeElecciones,this.state.eleccionAnterior]
            this.setState({
                listaDeElecciones:nuevaListaElecciones})
        }
    }else{
        alert("Fin")
    }
}

render(){
    return (
        <> 
        <h1 className="historia">{this.state.contenido}</h1>
        <div className= "opciones">
        <Opcion handleClick={this.handleChangeBotonA} opcion = {this.state.opcionA}>A</Opcion>
        <Opcion handleClick={this.handleChangeBotonB} opcion = {this.state.opcionB}>B</Opcion>
        </div>
        <Recordatorio eleccionAnterior={this.state.eleccionAnterior} listaElecciones={this.state.listaDeElecciones.map((eleccion,index)=><li key={eleccion + index}>{eleccion}</li>)} />
        </>
    )
}

}

export default Historia

