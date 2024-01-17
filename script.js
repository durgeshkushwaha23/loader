var tl = gsap.timeline()

function time(){
    var a = 0
    setInterval(function(){
        a = a + Math.floor(Math.random()*10)
        if(a<100){
            document.querySelector("#loader h1").innerHTML = a+"%"
        }
        else{ 
            a=100
            document.querySelector("#loader h1").innerHTML = a+"%"
        }
    },150)
}
   
tl.to("#loader h1",{
    dealy:0.5,
    duration:3,
    onStart:time()
})
tl.to("#loader ",{
    top:"-100vh",
    dealy:0.5,
    duration:1,
})

gsap.to(".page2 h1",{
    transform:"translateX(-100%)",
    fontWeight:"100",
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        // markers:true,
        start:"top 10%",
        end:"top -200%",
        scrub:4,
        pin:true
    }
})






