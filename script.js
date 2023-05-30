//toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav')

//ketika hamburgeer/garis3 diklik
document.querySelector('#menu').onclick = (e)=> {
    navbarNav.classList.toggle('active')
    e.preventDefault();
}

//toggle class active untuk search
const searchForm = document.querySelector('.search-form');
const searchBox= document.getElementById("search-box");

document.querySelector('#search-button').onclick =(tetepdihalaman) =>{
    searchForm.classList.toggle('active')
    searchBox.focus(); // agar langsung ke input
    tetepdihalaman.preventDefault();
}
//jika klik shoopingcart class active
const shoppingcart = document.querySelector('.shopping-cart');

document.querySelector('#shopping-cart-button').onclick=(keluar)=>{
    shoppingcart.classList.toggle('active');
    keluar.preventDefault();
}


//ketika klik di luar elemen
const menu = document.querySelector('#menu');
const sb = document.querySelector('#search-button');
const sc = document.querySelector('#shopping-cart-button');

//hamburger menu
document.addEventListener('click', function(out){
    if(!menu.contains(out.target) && !navbarNav.contains(out.target)){
        navbarNav.classList.remove('active');
    }
})

//search-button agar diklik dimana saja nutup elemen
document.addEventListener('click', function(asalklik){
    if(!sb.contains(asalklik.target) && !searchForm.contains(asalklik.target)){
        searchForm.classList.remove('active');
    }
});
//agar klik dimana saja nutup elemen
document.addEventListener('click', function(asalklik){
    if(!sc.contains(asalklik.target)&& !shoppingcart.contains(asalklik.target))
    shoppingcart.classList.remove('active');
});

//modal box ketika diklik mata muncul boxnya
const itemDetailmodal = document.querySelector('#item-detail-modal');
const itemDetailbutton= document.querySelectorAll('.item-detail-button');

itemDetailbutton.forEach((btn)=>{
    btn.onclick = (e) =>{
        itemDetailmodal.style.display='flex'
        e.preventDefault();
    }
})
//klik tombol close yg di modal box
document.querySelector('.modal .close-icon').onclick = (e)=>{
    itemDetailmodal.style.display='none';
    e.preventDefault();
}

//klik diluar modal
window.onclick = (e) =>{
    if(e.target === itemDetailmodal){
        itemDetailmodal.style.display='none';
    }
}