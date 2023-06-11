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

//.to("#whitem-1, #whitem-2, #greenm-1, #greenm-2", {scale:-0.2},"<")

.from("#greenm-1", {duration:2, drawSVG:"0%", stroke:"#83B9A5"},"<")
.from("#greenm-2", {duration:1.5, delay:.6, drawSVG:"0%", stroke:"#83B9A5"},"<")

.to("#d-1-green", {duration: .03, autoAlpha:1, fill:"#83B9A5"}, "-=0.05")
.to("#o-green", {duration: .03, autoAlpha:1, fill:"#83B9A5"}, "+=0.01")
.to("#l-green", {duration: .03, autoAlpha:1, fill:"#83B9A5"}, "+=0.01")
.to("#g-1-green", {duration: .03, autoAlpha:1, fill:"#83B9A5"}, "+=0.01")
.to("#a-green", {duration: .03, autoAlpha:1, fill:"#83B9A5"}, "+=0.01")
.to("#n-1-green", {duration: .03, autoAlpha:1, fill:"#83B9A5"}, "+=0.01")
.to("#d-1-green", {duration: .03, fill:"#fff"},"<")

.to("#i-1-green", {duration: .03, autoAlpha:1, fill:"#83B9A5"}, "+=0.01")
.to("#u-green", {duration: .03, autoAlpha:1, fill:"#83B9A5"}, "+=0.01")
.to("#c-green", {duration: .03, autoAlpha:1, fill:"#83B9A5"}, "+=0.01")
.to("#o-green", {duration: .03, fill:"#fff"},"<")

.to("#period-green", {duration: .03, autoAlpha:1, fill:"#83B9A5"}, "+=0.01")
.to("#l-green", {duration: .03, fill:"#fff"},"<")

.to("#d-2-green", {duration: .03, autoAlpha:1, fill:"#83B9A5"}, "-=0.01")
.to("#e-green", {duration: .03, autoAlpha:1, fill:"#83B9A5"}, "+=0.01")
.to("#g-1-green", {duration: .03, fill:"#fff"},"<")

.to("#s-green", {duration: .03, autoAlpha:1, fill:"#83B9A5"}, "+=0.01")
.to("#a-green", {duration: .03, fill:"#fff"},"<")

.to("#i-2-green", {duration: .03, autoAlpha:1, fill:"#83B9A5"}, "+=0.01")
.to("#n-1-green", {duration: .03, fill:"#fff"},"<")
.to("#i-1-green", {duration: .03, fill:"#fff"},"<")

.to("#g-2-green", {duration: .03, autoAlpha:1, fill:"#83B9A5"}, "+=0.01")
.to("#u-green", {duration: .03, fill:"#fff"},"<")
.to("#c-green", {duration: .03, fill:"#fff"},"<")

.to("#n-2-green", {duration: .03, autoAlpha:1, fill:"#83B9A5"}, "+=0.01")
.to("#period-green", {duration: .03, fill:"#fff"},"<")
.to("#d-2-green", {duration: .03, fill:"#fff"},"+=0.01")

.to("#e-green", {duration: .03, fill:"#fff"},"+=0.01")
.to("#s-green", {duration: .03, fill:"#fff"},"+=0.01")
.to("#i-2-green", {duration: .03, fill:"#fff"},"+=0.01")
.to("#g-2-green", {duration: .03, fill:"#fff"},"+=0.01")
.to("#n-2-green", {duration: .03, fill:"#fff"},"+=0.01")


;

GSDevTools.create();
