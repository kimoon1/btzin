const swiper = new Swiper('.prizm_main_section', {
    speed: 1000,
    spaceBetween: 0,
    loop:true,
    loopedSlides: 5,
    autoplay: {
        delay: 2000,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
});
let sc2SwiperMenu = ['건강Check','Best건강식품','전체보기']
const sc2Swiper = new Swiper('.sc2-swiper', {
    effect: 'fade',
    pagination: {
        el: '.sc2-swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (sc2SwiperMenu[index]) + '</span>';
        }
    },
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 100,
});
/*2번스와이퍼 end*/

gsap.registerPlugin(ScrollTrigger);
const dataItems = document.querySelectorAll('[data-item]');
for(let i = 1; i < dataItems.length+1; i++) {
    gsap.to(`[data-item='0${i}']`, {
        scrollTrigger: {
            trigger: `[data-item='0${i}']`,
            markers: false,
            start: "top 500px",
            end: "top 500px",
            scrub: true,
        },
        width: '2px',
        backgroundColor: '#fff'
    });
    gsap.to(`[data-item='0${i}']`, {
        scrollTrigger: {
            trigger: `[data-item='0${i}']`,
            markers: false,
            start: "bottom 500px",
            end: "bottom 500px",
            scrub: true,

        },
        height: '0px',
    });
}





window.onload = function () {
    // ios 사파리 vh 문제해결 js코드 + css 연동
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
    window.addEventListener('resize', () => {
        let vh = window.innerHeight * 0.01
        document.documentElement.style.setProperty('--vh', `${vh}px`)
    })
}