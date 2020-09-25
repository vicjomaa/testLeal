import React from 'react';
import '../styles/PageLoading.css';
import Loader from './Loader';


function PageLoading() {
        return(
            <React.Fragment>
                <div className="PageLoading">
                    <h3>Loading..</h3>
                    <Loader/>
                    </div>      
            </React.Fragment>
        );
    
}

export default PageLoading;