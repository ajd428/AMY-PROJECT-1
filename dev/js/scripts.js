import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function oneAni(){
    let tl = gsap.timeline();
    tl.from("#line-one", {delay:0.5, duration:1, alpha:0, x:200})
    .from("#line-two", {delay:0.25, duation:0.5, alpha:0, x:-200}, "<");
    return tl;

}

function twoAni(){
    let tl = gsap.timeline({
        scrollTrigger:{
        trigger:"#box",
        scrub:true
    }});
    tl.from("#box", {duration:0.5, scale:2})
    .from("#location", {duation:0.5, alpha:0, scale:1.5}, "<");
    return tl;

}

function threeAni(){
    let tl = gsap.timeline({
        scrollTrigger:{
        trigger:"#box",
        scrub:true
    }});
    tl.from("#portfolio", {duration:2, alpha:0, rotation: 540})
    .from("#filler", {duation:1, alpha:0, x:400}, "<");


    return tl;

}


let mainTl = gsap.timeline();
mainTl.add(oneAni())
.add(twoAni())
.add(threeAni())

;