import React from 'react';

import '../styles/PageError.css';


/**
Función para la visualización de páginas no encontradas
 */


function PageError(props) {
  return <div className="PageError">❌{props.error.code}:{props.error.name}😱
  <p>{props.error.message}</p></div>;
}

export default PageError;