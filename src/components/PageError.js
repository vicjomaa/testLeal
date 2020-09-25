import React from 'react';

import '../styles/PageError.css';

function PageError(props) {
  return <div className="PageError">❌{props.error.code}:{props.error.name}😱
  <p>{props.error.message}</p></div>;
}

export default PageError;