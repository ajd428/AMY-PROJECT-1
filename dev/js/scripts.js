import {gsap} from "gsap";

//QUIZ


//Part 1

//let mainTl = gsap.timeline();

//mainTl.from(".red", {duration:1, x:"0"})
    //.from(".blue", {duration:1, x:"350"}, "<")
    //.to(".red", {duration:2, y:"0", delay:2})
    //.to(".blue", {duration:2, y:"300", delay:2}, "<" or "3" worked for some reason)

//;

//Part 2

//let mainTl = gsap.timeline();

//mainTl.from(".graph", {duration:2, opacity:0})
    //.from(".red", {duration:1, ease:"?", x:"0"})
    //.from(".blue", {duration:1, ease:"?", x:"350"}, "<")
    //.to(".red", {duration:2, ease:"?", y:"0", delay:2})
    //.to(".blue", {duration:2, ease:"?", y:"300", delay:2}, "<" or "3" worked for some reason)


//;


let mainTl = gsap.timeline();

mainTl.from(".graph", {duration:2, opacity:0})
    .from(".red", {duration:1, x:"0", ease: "bounce({strength:0.5, endAtStart:true})"})
    .from(".blue", {duration:1, ease: "bounce({strength:0.5, endAtStart:true})", x:"350"}, "<")
    .to(".red", {duration:2, y:"0", delay:2})
    .to(".blue", {duration:2, y:"300", delay:2}, "3")
;

