import {gsap} from "gsap"

gsap.from("#logo", {duration:2.25, y:"-=80", delay:0.25});

gsap.from("nav li", {duration:1.75, x:"+=450", stagger: 0.25, delay:0.25});

gsap.from("#content", {duration:2.25, scale:1.5, rotation:180});

gsap.from("#hero-content", {duration:0.75, yoyo:true, repeat:2, repeatDelay:0.05, scale:1.5});