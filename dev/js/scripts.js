import {gsap} from "gsap";

//QUIZ

let mainTl = gsap.timeline();

nTl.from(".red", {duration:1, x:0})
.from(".blue", {duration:1, x:350})
.to(".red", {delay:2, duration:2, y:0})
.to(".blue", {delay:2, duration2, y:300})
;