//header.js
const allMenu = document.querySelectorAll('.gnb > li > a');
//const lnbBg = document.querySelector('.lnb_bg');
const lnbBg = document.querySelectorAll('.lnb_bg');


for(let i=0; i < allMenu.length; i++ ){
    allMenu[i].addEventListener('mouseover',function(){
        this.style = 'color:#CBA064';
        lnbBg[i].style = 'top:50px';
    });
    allMenu[i].addEventListener('mouseout',function(){
        this.style = 'color:#000'
        lnbBg[i].style = 'top:-100vh';
    })
}

for(let i=0; i < lnbBg.length; i++ ){
    lnbBg[i].addEventListener('mouseover',function(){
        allMenu[i].style = 'color:#CBA064';
        this.style = 'top:50px';
    });
    lnbBg[i].addEventListener('mouseout',function(){
        allMenu[i].style = 'color:#000'
        this.style = 'top:-100vh';
    })
}
