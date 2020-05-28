var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://api.mediehuset.net/bakeonline/products", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));