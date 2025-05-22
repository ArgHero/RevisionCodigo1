const baseEndpoint = 'https://api.github.com/users/'; //La liga era redunante 
//const usersEndpoint = `${baseEndpoint}/users`; No es necesaria esta linea


//Los nombres de los elementos eran ambiguos de la misma forma que el selector dentro de los ""
const nombre = document.querySelector("h1.name");
const blog = document.querySelector("h3.blog");
const ubicacion = document.getElementById("ubicacion");
//Se cambiaron los nombres porque eran palabras reservadas.

//Faltaba definir que esta era una función asincrona para que funconara el await de las promesas
async function displayUser(username) {
  nombre.textContent = 'cargando...';
  const response = await fetch(baseEndpoint+username);//Basta con concatenar 
  const data  = await response.json();//Es necesario convertir el texto recibido a formato JSON para poder ser manipulado
  //console.log(data); // PAra fines de desarrollo

  nombre.textContent = `${data.name}`;//No estaban dentro de BackTicks
  blog.textContent = `${data.login}`; //Lo cambié a mi nombre de usuario namas
  ubicacion.textContent = `${data.location}`;
  ubicacion.insertAdjacentHTML("afterend",`
    <img src="${data.avatar_url}" alt="${data.id}">
    `);
  

}

function handleError(err) {
  console.log('OH NO!');
  console.error(err);
  nombre.textContent = `Algo salió mal: ${err}`
}

displayUser('arghero').catch(handleError);