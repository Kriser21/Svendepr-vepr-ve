var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://api.mediehuset.net/bakeonline/categories", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


    
  //  document.getElementById("produkter").innerHTML = result[0].title;
  // then((data) => { document.getElementById("produkter").innerHTML = result[0].title; })