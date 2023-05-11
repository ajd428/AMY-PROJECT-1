import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function oneAni(){
    let tl = gsap.timeline();
    tl.from("#line-one", {delay:0.5, duration:1, alpha:0, x:200})
    .from("#line-two", {delay:0.25, duation:0.5, alpha:0, x:-200}, "<")
    return tl;

}

function twoAni(){
    let tl = gsap.timeline();
    tl.from("#section-2", {duration:0.75, alpha:0, y:-10, ease:2})
    .from("#box", {delay:0.5, duration:1, alpha:0, x:200})
    .from("#location", {delay:0.25, duation:0.5, alpha:0, x:-200}, "<")
    return tl;

}

function threeAni(){
    let tl = gsap.timeline();
    tl.from("#portfolio", {duration:0.5, scale:2})
    .from("#filler", {duation:0.5, alpha:0, scale:1.5}, "<")


    return tl;

}


let mainTl = gsap.timeline();
mainTl.add(oneAni())
.add(twoAni())
.add(threeAni())

;