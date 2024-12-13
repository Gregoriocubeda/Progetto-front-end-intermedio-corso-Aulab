//Evento navbar

let navbar = document.querySelector('#navbar');

window.addEventListener('scroll', ()=>{
    if(window.scrollY > 0){
        navbar.classList.add('scrolledNavbar')
    }else{
        navbar.classList.remove('scrolledNavbar')
    }
})


//sezione numeri
//setInterval()
let counter = 0;
let interval = setInterval(()=>{if(counter < 100){
    counter ++;
}else{
    clearInterval(interval);
}


}, 100);

//Swiper
let swiperWrapper = document.querySelector('#swiperWrapper');


let reviews = [

    {user: 'Andrea', description:'Bel sito, mi è piaciuto molto', rank: 5},
    {user: 'Marcello', description:'Carino ma le spedizioni sono lente', rank: 3},
    {user: 'Matteo', description:'Bel sito, lo consiglio', rank: 4},
    {user: 'Miriam', description:'C è di meglio', rank: 2},
    {user: 'Claudio', description:'Prodotti scadenti', rank: 1},
    {user: 'Mauro', description:'Buon sito, la spedizione è gratuita', rank: 5},

];

reviews.forEach((review)=>{
    let reviewCard = document.createElement('div');
    reviewCard.classList.add('swiper-slide');
    reviewCard.innerHTML = ` <div class="swiper-slide">
<div class="reviewCard">
    <h4>${review.user}</h4>
    <p>${review.description}</p>
    <span>
    <i class="${(review.rank >= 1)?'fa-solid':'fa-regular'} fa-star"></i>
    <i class=" ${(review.rank >= 2)?'fa-solid':'fa-regular'} fa-star"></i>
    <i class="${(review.rank >= 3)?'fa-solid':'fa-regular'}  fa-star"></i>
    <i class="${(review.rank >= 4)?'fa-solid':'fa-regular'}  fa-star"></i>
    <i class="${(review.rank >= 5)?'fa-solid':'fa-regular'}  fa-star"></i>
    
    </span>
    
    </div>
        `;

        swiperWrapper.appendChild(reviewCard);

})

let swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
        },
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
    });


    let number1 = document.querySelector('#number1')
    

