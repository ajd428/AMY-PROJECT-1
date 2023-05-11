import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function oneAni(){
    let tl = gsap.timeline();
    tl.from("#", {duration:0.25, alpha:0, y:-100})
    .from("#", {duation:1, alpha: 0, y:-100})
    return tl;

}


let mainTl = gsap.timeline();
mainTl.add(oneAni())

;