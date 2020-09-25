import React from 'react';

/**
Componente del UI animado de carga
 */

function Loader() {
        return(
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        );    
}

export default Loader;