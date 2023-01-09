let lastScrollTop = 0;
const delta = 5;
let fixBox = document.querySelector('#header');
let fixBoxHeight = fixBox.offsetHeight;
let didScroll;
//스크롤 이벤트 
window.onscroll = function(e) {
    didScroll = true;
};

//0.25초마다 스크롤 여부 체크하여 스크롤 중이면 hasScrolled() 호출
setInterval(function(){
    if(didScroll){
        hasScrolled();
        didScroll = false;
    }
    if (lastScrollTop == 0){
        fixBox.classList.add('show');
    }
}, 250);

function hasScrolled(){
    let nowScrollTop = window.scrollY;
    if (Math.abs(lastScrollTop - nowScrollTop) <= delta){
        return;
    }
    if (nowScrollTop > lastScrollTop && nowScrollTop > fixBoxHeight){
        //Scroll down
        fixBox.classList.remove('show');
    }else {
        if (nowScrollTop + window.innerHeight < document.body.offsetHeight){
            //Scroll up
            fixBox.classList.add('show');
        }
    }
    lastScrollTop = nowScrollTop;
}