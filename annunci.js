// filtri

let categoryRadiosWrapper = document.querySelector('#categoryRadiosWrapper');
let priceInput = document.querySelector('#priceInput');
let priceValue = document.querySelector('#priceValue');
let searchInput = document.querySelector('#searchInput');
let searchButton = document.querySelector('#searchButton')




//Evento navbar

let navbar = document.querySelector('#navbar');

window.addEventListener('scroll', ()=>{
    if(window.scrollY > 0){
        navbar.classList.add('scrolledNavbar')
    }else{
        navbar.classList.remove('scrolledNavbar')
    }
})

//Cards

let wrapper = document.querySelector('#padrecards')

fetch('./annunci.json').then((response)=>response.json()).then((data)=>{
    //blocco di istruzioni

function accorciaNomi(name){
    if(name.lenght > 15){
        return name.split(' ')[0] + '...'
    }else{
        return name;
    }
}
    function showCards(data){
    padrecards.innerHTML = ' ';

    data.forEach((annuncio)=>{
        let card = document.createElement('div');
        card.classList.add('cardCustom');
        card.innerHTML = ` 
        <class=”cardTitle>${accorciaNomi(annuncio.name)}</h4>
        <p class=”cardCategory”>${annuncio.category}</P>
        <p class=”cardPrice”>${annuncio.price}</p>`
        
        wrapper.appendChild(card);
        
        
    
    }) 
}
//filtro per categoria
function generateRadios(){
    let categories = data.map((annuncio)=> annuncio.category);
    let uniqueCategories = [];
    categories.forEach((category)=>{
        if(!uniqueCategories.includes(category)){
            uniqueCategories.push(category)
        }
    })
    uniqueCategories.forEach((category)=>{
        let div = document.createElement('div');
        div.classList.add('form-check');
        div.innerHTML = ` <input class="form-check-input radioCategory" type="radio" name="flexRadioDefault" id="${category}">
        <label class="form-check-label" for="${category}">
            ${category}
        </label>
        `;
    
        categoryRadiosWrapper.appendChild(div)
    })
    
}

function filterByCategory(array){
    let categoria = Array.from(radioButtons).find( (button)=> button.checked).id;
    if(categoria == 'All'){
        return array
    }else{
        let filtered = array.filter((annuncio)=> annuncio.category == categoria)
        return filtered
    }
    
}
//filtro per prezzo
function setPrice(){
    let prices = data.map((annuncio)=> +annuncio.price);
    prices.sort((a,b)=> a - b);
    let prezzoMassimo = Math.ceil(prices.pop());
    priceInput.max = prezzoMassimo;
    priceInput.value = prezzoMassimo;
    let prezzoMinimo = Math.floor(prices.shift());
    priceInput.min = prezzoMinimo;
    priceValue.innerHTML = `${prezzoMassimo}$`
}
function filterByPrice(array){
    let filtered = array.filter((annuncio)=> +annuncio.price <= priceInput.value)
    priceValue.innerHTML = `${priceInput.value}$`;
    return filtered
}

priceInput.addEventListener('input', ()=>{
    globalFilter();
})

//filtro per parola
function filterByWord(array){
    let filtered = array.filter( (annuncio)=> annuncio.name.toLowerCase().includes(searchInput.value.toLowerCase()));
    return filtered;
}
searchButton.addEventListener('click', ()=>{
    globalFilter();
})

function globalFilter(){
    let filteredByCategory = filterByCategory(data);
    let filteredByCategoryAndPrice = filterByPrice(filteredByCategory);
let filteredByCategoryAndPriceAndWord = filterByWord(filteredByCategoryAndPrice);
showCards(filteredByCategoryAndPriceAndWord);
}

showCards(data);
generateRadios();

let radioButtons = document.querySelectorAll('.radioCategory');
    radioButtons.forEach((button)=>{
        button.addEventListener('click', ()=>{
            globalFilter();
        })
    })
setPrice();

})

