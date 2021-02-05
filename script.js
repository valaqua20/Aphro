var search = document.querySelector('.magnifying-glass');
search.addEventListener('click',()=>{
    document.querySelector('.search').classList.toggle('border-black');
});
//person-icon
document.querySelector('.person').addEventListener('mouseenter',()=>{
    document.querySelector('.person').setAttribute("src","./img/blackPerson.png");
})
document.querySelector('.person').addEventListener('mouseleave',()=>{
    document.querySelector('.person').setAttribute("src","./img/Vector.png");
})
//heart-icon
document.querySelector('.heart').addEventListener('mouseenter',()=>{
    document.querySelector('.heart').setAttribute("src","./img/blackHeart.png");
})
document.querySelector('.heart').addEventListener('mouseleave',()=>{
    document.querySelector('.heart').setAttribute("src","./img/Vector-2.png");
})
//bag-icon
document.querySelector('.bag').addEventListener('mouseenter',()=>{
    document.querySelector('.bag').setAttribute("src","./img/blackBag.png");
})
document.querySelector('.bag').addEventListener('mouseleave',()=>{
    document.querySelector('.bag').setAttribute("src","./img/tải xuống.png");
})
//slide
var couter = 1;
setInterval(()=>{
    document.getElementById('radio-'+couter).checked = true;
    couter++;
    if(couter!=1){
        document.querySelector(".auto-btn1").classList.remove("bg-white");
    }
    if(couter>3){
        couter=1;
    }
},2000);