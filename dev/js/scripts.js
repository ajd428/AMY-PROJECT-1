import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";

gsap.registerPlugin(MotionPathPlugin, TextPlugin, DrawSVGPlugin, GSDevTools, MorphSVGPlugin, MotionPathHelper);

const mainTL = gsap.timeline();

mainTL.fromTo("#whitem-1", {drawSVG:"0%"}, {duration:2, drawSVG:"100%", stroke:"#fff"})
.fromTo("#whitem-2",{drawSVG:"0%"}, {duration:1.5, delay:.6, drawSVG:"100%", stroke:"#fff"},"<")

.to("#greenm-1", {duration:2, delay:.2, drawSVG:"100%", stroke:"#83B9A5"},"<")
.to("#greenm-2", {duration:1.5, delay:.6, drawSVG:"100%", stroke:"#83B9A5"},"<")

.to("#d-1-green", {duration: .05, delay:.4, autoAlpha:1, fill:"#83B9A5"})
.to("#o-green", {duration: .05, autoAlpha:1, fill:"#83B9A5"})
.to("#l-green", {duration: .05, autoAlpha:1, fill:"#83B9A5"})
.to("#g-1-green", {duration: .05, autoAlpha:1, fill:"#83B9A5"})
.to("#a-green", {duration: .05, autoAlpha:1, fill:"#83B9A5"})
.to("#n-1-green", {duration: .05, autoAlpha:1, fill:"#83B9A5"})
.to("#d-1-green", {fill:"#fff"},"<")

.to("#i-1-green", {duration: .05, autoAlpha:1, fill:"#83B9A5"},"<")
.to("#u-green", {duration: .05, autoAlpha:1, fill:"#83B9A5"})
.to("#c-green", {duration: .05, autoAlpha:1, fill:"#83B9A5"})
.to("#o-green", {fill:"#fff"},"<")

.to("#period-green", {duration: .05, autoAlpha:1, fill:"#83B9A5"},"<")
.to("#l-green", {fill:"#fff"})

.to("#d-2-green", {duration: .05, autoAlpha:1, fill:"#83B9A5"},"<")
.to("#e-green", {duration: .05, autoAlpha:1, fill:"#83B9A5"})
.to("#g-1-green", {fill:"#fff"})

.to("#s-green", {duration: .05, autoAlpha:1, fill:"#83B9A5"},"<")
.to("#a-green", {fill:"#fff"})

.to("#i-2-green", {duration: .05, autoAlpha:1, fill:"#83B9A5"},"<")
.to("#n-1-green", {fill:"#fff"},"<")
.to("#i-1-green", {fill:"#fff"})

.to("#g-2-green", {duration: .05, autoAlpha:1, fill:"#83B9A5"},"<")
.to("#u-green", {fill:"#fff"},"<")
.to("#c-green", {fill:"#fff"})

.to("#n-2-green", {duration: .05, autoAlpha:1, fill:"#83B9A5"},"<")
.to("#period-green", {fill:"#fff"},"<")
.to("#d-2-green", {fill:"#fff"})

.to("#e-green", {fill:"#fff"})
.to("#s-green", {fill:"#fff"})
.to("#i-2-green", {fill:"#fff"})
.to("#g-2-green", {fill:"#fff"})
.to("#n-2-green", {fill:"#fff"})


;

GSDevTools.create();
