import React from 'react'
import './styles/PagError.css'

const PagError = props => (
  <div className="Error__container">
    <h3>{`Ups! ha ocurrido un error: ${props.error.message}`}</h3>
  </div>
)

export default PagError
