//header.js
const allMenu = document.querySelectorAll('.gnb > li > a');
//const lnbBg = document.querySelector('.lnb_bg');
const lnbBg = document.querySelectorAll('.lnb_bg');

/* 
document.addEventListener("mouseover", function () {
  const gnbItems = document.querySelectorAll(".gnb > li");

  gnbItems.forEach((item) => {
    const lnbBg = item.querySelector(".lnb_bg");
    const link = item.querySelector("a");
    
    if (lnbBg && link) {
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
/*       
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

 */