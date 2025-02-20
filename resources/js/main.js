const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
    searchEl.classList.add('focused');
    /* 
    setAttribute = searchInputEl 부분에 어떠한 html 속성을 지정 하겠다. 
    jquery로 따지면 attr
    */
    searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});


const badgeEl = document.querySelector('header .badges');
const toTopEl = document.getElementById("to-top");

window.addEventListener('scroll', _.throttle(function(){
    if (window.scrollY > 500){
        //gsap.to(요소, 지속시간, 옵션);
        gsap.to(badgeEl, .6 , {
            opacity: 0,
            display: 'none'
        });

        gsap.to(toTopEl, .2 , {
            x: 0,
            opacity:1
        });

    }else{
        gsap.to(badgeEl, .6 , {
            opacity: 1,
            display: 'block'
        });

        gsap.to(toTopEl, .2 , {
            x: 100,
            opacity:0
        });
    }
}, 300));

toTopEl.addEventListener('click', function(){
    gsap.to(window, .7, {
        scrollTo: 0
    });
})

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl , index ){
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .7,
        opacity : 1
    });
});

// new = javascript 생성자 class
new Swiper('.notice-line .swiper-container', {
    direction:'vertical',
    autoplay: true,
    loop: true,
});

new Swiper('.promotion .swiper-container',{
    slidesPerView : 3,
    spaceBetween: 10,
    centeredSlides : true,
    loop: true,
    autoplay: {
        delay: 3000
    },
    pagination: {
        el: '.promotion .swiper-pagination',
        clickable : true
    },

    navigation: {
        prevEl : '.promotion .swiper-prev',
        nextEl : '.promotion .swiper-next'
    }
});

new Swiper('.awards .swiper-container',{
    slidesPerView : 5,
    spaceBetween: 30,
    centeredSlides : true,
    loop: true,
    autoplay: {
        delay: 3000
    },

    navigation: {
        prevEl : '.awards .swiper-prev',
        nextEl : '.awards .swiper-next'
    }
});

const promotioEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function(){
    isHidePromotion = !isHidePromotion
    if(isHidePromotion){
        promotioEl.classList.add('hide');
    }else{
        promotioEl.classList.remove('hide');
    }
});

function random (min, max){
    //.toFixed()를 통해 반환된 문자 데이터를
    // parseFloat() 를 통해 소수점을 가지는 숫자 데이터로 변화
    return parseFloat((Math.random() * (max - min) + min ).toFixed(2))
}

function floatingObject(selector, delay, size){
    gsap.to(selector, random(1.5, 2.5), {
        y: size,
        repeat: -1,
        yoyo: true,
        ease: Power1.easeInOut,
        delay: random(0, delay)
    });
}

floatingObject('.floating1' ,1, 15);
floatingObject('.floating2' ,.5, 15);
floatingObject('.floating3' ,1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy')
// 요소들 반복 처리!
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({ // 감시할 장면(Scene)을 추가
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 // 화면의 80% 지점에서 보여짐 여부 감시
    })
    .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()) // 컨트롤러에 장면을 할당(필수!)
})

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //현재 년도
































































