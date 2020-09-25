/**
 * [someFunction description]
 * @param  {obj} transaction [Historial completo de transacciones]
 * @param  {int} startDateG [Fecha desde]
 * @param {int}  endDateGT    [Fecha Hasta]
 * @param {string}  description   [Filtro por texto]
 * @return {obj}   transactionShow   [Historial de transaccioens filtrado]
 */


function FilterData(transactions,startDateGT,endDateGT,description) {

    return new Promise(resolve => {
        setTimeout(function() {
            var transactionShow =[]; 
            transactions.map((transaction) =>{
                var transactionTime = new Date(transaction.createdDate).getTime();
                if(transaction.type.includes(description)|| description ==='' ){
                    if(isNaN(startDateGT) &&  transactionTime <= endDateGT){
                        transactionShow=[].concat(transactionShow,transaction);        
                    }
                    else if (startDateGT <= transactionTime && isNaN(endDateGT)){
                        transactionShow=[].concat(transactionShow,transaction); 
                    }                      
                    else if(startDateGT <= transactionTime && transactionTime <= endDateGT){
                        transactionShow=[].concat(transactionShow,transaction); 
                    }else if(isNaN(startDateGT) && isNaN(endDateGT) ){
                        transactionShow=[].concat(transactionShow,transaction); 
                    }else{
                    }   
                }                 
            }) 
            resolve(transactionShow);
        }, 500)
      })
}

export default FilterData;