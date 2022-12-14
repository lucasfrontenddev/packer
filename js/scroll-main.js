gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ ease: 'none', duration: 3})

const tl = gsap.timeline();

if (window.innerWidth > 900) {    
    document.getElementById("hey").setAttribute("y", "50");
    document.getElementById("i_am_a").setAttribute("y", "100");
    document.getElementById("packer").setAttribute("y", "160");
    document.getElementById("i_am_a_2").setAttribute("y", "100");
    document.getElementById("rigger").setAttribute("y", "160");
    tl.from('.seccion__2', {yPercent: 100})
    tl.from('.seccion__3', {yPercent: 100})
    tl.from('.seccion__4', {yPercent: 100})

    .fromTo('.sky', {y:0},{y:-100}, 0)
    .fromTo('.cloud1', {y:100},{y:-800}, 0)
    .fromTo('.cloud2', {y:-150},{y:-500}, 0)
    .fromTo('.cloud3', {y:-50},{y:-650}, 0)
    .fromTo('.cloud4', {y:-80},{y:-900}, 0)
    .fromTo('.mountBg', {y:-10},{y:-100}, 0)
    .fromTo('.mountMg', {y:-30},{y:-250}, 0)
    .fromTo('.mountFg', {y:-50},{y:-600}, 0)
    .fromTo('.flag1', {y:-50, x: 800},{y:-00,}, 0)

    ScrollTrigger.create({
        animation: tl,
        trigger: '.animation__container',
        markers: false,
        start: 'top top',
        end:'+=6000', 
        pin: true,
        scrub: true
    })

        /* Clouds  */
        let clouds = gsap.timeline();
        ScrollTrigger.create({
            animation: clouds,
            trigger: ".scrollElement",
            start: "top top",
            end: "70% 100%",
            scrub: 1,
        });
    
        clouds.to("#cloud1", { x: 500 }, 0)
        clouds.to("#cloud2", { x: 1000 }, 0)
        clouds.to("#cloud3", { x: -1000 }, 0)
        clouds.to("#cloud4", { x: -700, y: 25 }, 0)
    

} else {
    document.getElementById("hey").setAttribute("y", "175");
    document.getElementById("i_am_a").setAttribute("y", "200");
    document.getElementById("packer").setAttribute("y", "240");
    document.getElementById("i_am_a_2").setAttribute("y", "200");
    document.getElementById("rigger").setAttribute("y", "240");

    tl.from('.seccion__2', {yPercent: 100})
    tl.from('.seccion__3', {yPercent: 100})
    tl.from('.seccion__4', {yPercent: 100})

    .fromTo('.sky', {y:0},{y:-100}, 0)
    .fromTo('.cloud1', {y:100},{y:-800}, 0)
    .fromTo('.cloud2', {y:-150},{y:-500}, 0)
    .fromTo('.cloud3', {y:-50},{y:-650}, 0)
    .fromTo('.cloud4', {y:-80},{y:-900}, 0)
    .fromTo('.mountBg', {y:-10},{y:-100}, 0)
    .fromTo('.mountMg', {y:-30},{y:-250}, 0)
    .fromTo('.mountFg', {y:-50},{y:-600}, 0)
    .fromTo('.elemento1', {y:-50, scale: 2},{y:-600, scale: 1}, 0)
    .fromTo('.flag', {scale: 1},{scale: 1.2}, 0)

    ScrollTrigger.create({
        animation: tl,
        trigger: '.animation__container',
        markers: false,
        start: 'top top',
        end:'+=6000', 
        pin: true,
        scrub: true
    })
}







/*
gsap.timeline({
    scrollTrigger: {
        trigger:'.animation__container', 
        start:'top top', 
        end:'+=1000', 
        pin:true,
        scrub: true
    }
    })
scrollTrigger.create({
    animation: tl,
    trigger: '.animation__container',
    markers: true,
    start: 'top top',
    end:'+=2000', 
    pin: true,

})

*/



/*
gsap.set('.sky-container', 
    {position:'relative', 
    background:'#fff', 
    width:'100%', 
    maxWidth:'100%', 
    height:'100%', 
    top:0, 
    left:'50%', 
    x:'-50%'
    }
)
gsap.set('.scrollDist', {width:'100%', height:'200%'})

gsap.timeline({
    scrollTrigger: {
        trigger:'.sky-container', 
        start:'top top', 
        end:'bottom bottom', 
        scrub:1}
    })
    .fromTo('.sky', {y:0},{y:-200}, 0)
    .fromTo('.cloud1', {y:100},{y:-800}, 0)
    .fromTo('.cloud2', {y:-150},{y:-500}, 0)
    .fromTo('.cloud3', {y:-50},{y:-650}, 0)
    .fromTo('.cloud4', {y:-80},{y:-900}, 0)
    .fromTo('.mountBg', {y:-10},{y:-100}, 0)
    .fromTo('.mountMg', {y:-30},{y:-250}, 0)
    .fromTo('.mountFg', {y:-50},{y:-600}, 0)
    .fromTo('.elemento1', {y:-50},{y:-600}, 0)


    $('#arrowBtn').on('mouseenter', (e)=>{ gsap.to('.arrow', {y:10, duration:0.8, ease:'back.inOut(3)', overwrite:'auto'}); })
$('#arrowBtn').on('mouseleave', (e)=>{ gsap.to('.arrow', {y:0, duration:0.5, ease:'power3.out', overwrite:'auto'}); })
$('#arrowBtn').on('click', (e)=>{ gsap.to(window, {scrollTo:innerHeight, duration:1.5, ease:'power1.inOut'}); }) 
// scrollTo requires the ScrollTo plugin (not to be confused w/ ScrollTrigger)

*/

