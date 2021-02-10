import React, { useState} from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import Resumen from './components/Resument'
import Result from './components/Resultado'
import Spinner from './components/Spinner'
import styled from '@emotion/styled'
const Contenedor = styled.div`
  max-width:600px;
  margin:0 auto;
  text-align:center;

`
const ContenedorFormulario = styled.div`
  background-color:#FFF;
  padding: 3rem;
`
function App() {
  const [resumen, guardarResumen] = useState({
    cotizacion:0,
    datos:{
      marca:'',
      year:'',
      plan:''
    }

  })
  const [cargando, guardarCargando] = useState(false)

  const {cotizacion,datos} = resumen

  return (
    <Contenedor>
    <Header titulo='Insurance quote'/>
    <ContenedorFormulario>
    <Formulario
    guardarResumen = {guardarResumen}
    guardarCargando = {guardarCargando}
    />
    {cargando ? <Spinner />: null }

    <Resumen
      datos={datos}
    />
    {!cargando ?
      <Result
      cotizacion = {cotizacion} /> :null
    }

    </ContenedorFormulario>


    </Contenedor>

  );
}

export default App;
