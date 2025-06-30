//header.js
const allMenu = document.querySelectorAll('.gnb > li > a');
//const lnbBg = document.querySelector('.lnb_bg');
const lnbBg = document.querySelectorAll('.lnb_bg');


document.addEventListener("DOMContentLoaded", function () {
  const gnbItems = document.querySelectorAll(".gnb > li");

  gnbItems.forEach((item) => {
    const lnbBg = item.querySelector(".lnb_bg");

    if (lnbBg) {
      item.addEventListener("mouseenter", () => {
        lnbBg.style.opacity = "1";
        lnbBg.style.transform = "translateY(0)";
        lnbBg.style.pointerEvents = "auto";
      });

      item.addEventListener("mouseleave", () => {
        lnbBg.style.opacity = "0";
        lnbBg.style.transform = "translateY(-20px)";
        lnbBg.style.pointerEvents = "none";
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const gnbItems = document.querySelectorAll(".gnb > li");

  gnbItems.forEach((item) => {
    const lnbBg = item.querySelector(".lnb_bg");
    const link = item.querySelector("a");

    if (lnbBg && link) {
      link.addEventListener("click", function (e) {
        // 모바일 화면에서만 동작
        if (window.innerWidth <= 768) {
          e.preventDefault(); // 링크 이동 방지
          lnbBg.classList.toggle("active"); // show/hide toggle
        }
      });
    }
  });
});


/* 
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

 */