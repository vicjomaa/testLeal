
/**
 Este componente contiene las funciones que ejecutan los servicios de login y levantar información de las transacciones
 */

const BASE_URL = 'https://pruebatecnica.puntosleal.com';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const randomNumber = (min = 0, max = 1) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const simulateNetworkLatency = (min = 30, max = 1500) =>
  delay(randomNumber(min, max));

async function callApi(endpoint, options = {}) {
  await simulateNetworkLatency();

  options.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  const url = BASE_URL+ endpoint;
  const response = await fetch(url, options);
  const data = await response.json();


  return data;
}


async function callApiXML(endpoint, method, jwtoken) {
  await simulateNetworkLatency();
  const url = BASE_URL+ endpoint;
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.setRequestHeader('Authorization', 'Bearer ' + jwtoken);
    xhr.onload = function () {
        var status = xhr.status;
        if (status == 200) {
            resolve(JSON.parse(xhr.responseText));
        } else {
            reject(status);
        }
                   

    };
    xhr.send();
});

}



const api = {
  users: {
    login(email,password){
        return callApi('/api/user/login',{
            method:'POST',
            body:JSON.stringify({
              email:email,
              password:password
            })
        })
    },
    listTransactions(startDate,endDate,token) {
      return callApiXML(`/api/user/my/transactions?${startDate},${endDate}`,"GET",token);
    } 
  }
};

export default api;