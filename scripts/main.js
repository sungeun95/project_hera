const bestSwiper = new Swiper('.video',{
    //옵션:값,
    autoplay:{delay:15000},
    loop:true,
    direction:'horizontal', //아래에서 위로 올라오게 horizontal, vertical
    scrollbar: {
        el: ".video-scroll",
    },
})

const aAll = document.querySelectorAll('a');
for(let i of aAll){
    i.addEventListener('click',function(e){
        e.preventDefault();
    })
}