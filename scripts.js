
document.addEventListener('DOMContentLoaded', buscarcomida)
function buscarcomida() {
    let txtbuscar = document.getElementById('txtbuscar').value 
    console.log(txtbuscar) 
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${txtbuscar}`
    fetch(url)
    .then(obtener => obtener.json())
    .then(dato =>{
      console.log(dato)  
     console.log(dato.meals[0].strMeal)
     console.log(dato.meals[0].strCategory)
     console.log(dato.meals[0].strArea)
     
     //imprime la url de la imagen en la consola del navegador 
     console.log(dato.meals[0].strMealThumb)
     //trae la imagen de la api endpoint de comida
     let im1 = document.getElementById('img1')
     im1.src = dato.meals[0].strMealThumb
     
     console.log(dato.meals[0].strInstructions)
    

        
    })
    .catch(unError => console.log(unError))
}

function bc2() {
    let txt = document.getElementById('txtbuscar').value
    console.log(txt)
}