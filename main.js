async function getPizza() {

    const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`);
    const data = await response.json();
    const count = data.count;
    const recipes =data.recipes;


    const result = recipes.map(function(pizza){
    return`
    <div class="pizza">
    <h2>${pizza.title}</h2>
    <img src='${pizza.image_url}'/>
    </div>
    `


    }).join('');
 
document.querySelector(".pizzas .row").innerHTML=result;

}



getPizza();
